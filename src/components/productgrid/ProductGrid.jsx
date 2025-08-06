import ProductCard from "./ProductCard";
import products from "./products";
import { useState } from "react";
import productsData from "./products";
import FilterSidebar from "../filter/FilterSidebar";

const ProductGrid = () => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const applyFilter = ({ priceRange, selectedRatings }) => {
    const [min, max] = priceRange;

    const filtered = productsData.filter((product) => {
      const withinPrice =
        product.discountPrice >= min && product.discountPrice <= max;
      const matchesRating =
        selectedRatings.length === 0 ||
        selectedRatings.includes(product.rating);
      return withinPrice && matchesRating;
    });

    setFilteredProducts(filtered);
  };

  return (
    <div className="flex">
      {/* Filter section placeholder */}
      <FilterSidebar onFilter={applyFilter} className="hidden lg:block" />

      {/* Product grid */}
      <div className="flex-1 px-4 mt-10 mr-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
