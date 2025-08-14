import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, cartMode = false }) => {
  const { name, image, rating, originalPrice, discountPrice, discount } = product;
  const { cart, addToCart, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Check if product is already in cart
  const isInCart = cart.some((item) => item.id === product.id);

  const handleClick = () => {
    if (cartMode) {
      // Cart page -> Remove from cart
      removeFromCart(product.id);
    } else if (isInCart) {
      // Already in cart -> Go to cart
      navigate("/cart");
    } else {
      // Add to cart
      addToCart(product);
    }
  };

  return (
    <div className="border p-4 rounded-md shadow-sm relative hover:shadow-md transition bg-white">
      {discount > 0 && (
        <div className="absolute top-2 left-2 bg-primaryMint text-black text-xs font-semibold px-2 py-1 rounded">
          -{discount}%
        </div>
      )}

      <img src={image} alt={name} className="h-40 w-full object-contain mb-4" />

      <h3 className="text-sm font-semibold mb-1 leading-tight">{name}</h3>

      <div className="text-yellow-300 text-sm mb-1">
        {"★".repeat(rating)}
        {"☆".repeat(5 - rating)}
      </div>

      <div className="text-sm mb-1">
        <span className="line-through text-gray-400 mr-2">₹{originalPrice}</span>
        <span className="text-black font-semibold">₹{discountPrice}</span>
      </div>

      <p className="text-xs text-gray-500 mb-4">Inclusive of all taxes</p>

      <button
        onClick={handleClick}
        className={`w-full font-medium py-2 rounded ${
          cartMode
            ? "bg-secondaryPink hover:bg-pink-400 text-accentForest"
            : isInCart
            ? "bg-accentForest hover:bg-green-700 text-white"
            : "bg-secondarySage hover:bg-secondaryLeaf text-white"
        }`}
      >
        {cartMode
          ? "Remove from cart"
          : isInCart
          ? "Go to cart"
          : "Add to cart"}
      </button>
    </div>
  );
};

export default ProductCard;
