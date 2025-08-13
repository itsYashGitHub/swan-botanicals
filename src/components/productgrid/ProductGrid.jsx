import ProductCard from "./ProductCard";
import products from "./products";
import { useState } from "react";
import FilterSidebar from "../filter/FilterSidebar";
import MobileFilter from "../filter/MobileFilter";
import { useCart } from "../../context/CartContext";

const ProductGrid = ({ cartMode = false, limit = null }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const { cart } = useCart();

  const applyFilter = ({ priceRange, selectedRatings }) => {
    const [min, max] = priceRange;
    const filtered = products.filter((product) => {
      const withinPrice =
        product.discountPrice >= min && product.discountPrice <= max;
      const matchesRating =
        selectedRatings.length === 0 ||
        selectedRatings.includes(product.rating);
      return withinPrice && matchesRating;
    });
    setFilteredProducts(filtered);
  };

  let displayProducts = cartMode ? cart : filteredProducts;
  if (!cartMode && limit) {
    displayProducts = displayProducts.slice(0, limit);
  }

  return (
    <div className="flex flex-col lg:flex-row mt-4 mb-10">
      {/* Mobile filter */}
      {!cartMode && <MobileFilter onFilter={applyFilter} />}

      {/* Desktop filter */}
      {!cartMode && (
        <FilterSidebar onFilter={applyFilter} className="hidden lg:block" />
      )}

      {/* Product grid */}
      <div className="flex-1 px-4 mt-4 lg:mt-10 mr-0 lg:mr-10">
        {displayProducts.length === 0 ? (
          <p className="text-center text-gray-500 mt-10 text-lg">
            {cartMode ? "Your cart is empty." : "No products found."}
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                cartMode={cartMode}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
