import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();
const CART_KEY = "swan_cart_v1";

export const CartProvider = ({ children }) => {
  // Lazy initialize from localStorage so state is restored immediately
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem(CART_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (err) {
      console.warn("Failed to parse cart from localStorage:", err);
      return [];
    }
  });

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (err) {
      console.warn("Failed to save cart to localStorage:", err);
    }
  }, [cart]);

  // Sync cart across tabs
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === CART_KEY) {
        try {
          const value = e.newValue ? JSON.parse(e.newValue) : [];
          setCart(value);
        } catch {
          // ignore parse errors
        }
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const idx = prev.findIndex((p) => p.id === product.id);
      if (idx > -1) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], quantity: (copy[idx].quantity || 1) + qty };
        return copy;
      }
      return [...prev, { ...product, quantity: qty }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((p) => p.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      // remove if zero or negative
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, quantity } : p))
    );
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
};
