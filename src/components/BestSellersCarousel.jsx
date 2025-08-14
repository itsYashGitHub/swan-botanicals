import { useEffect, useRef } from "react";
import ProductCard from "./productgrid/ProductCard";
import products from "./productgrid/products";

const BestSellersCarousel = () => {
  const containerRef = useRef(null);

  // Auto scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const scrollWidth = container.scrollWidth;
      const currentScroll = container.scrollLeft;
      const maxScroll = scrollWidth - container.clientWidth;

      if (currentScroll >= maxScroll) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // filter top products
  const bestSellingProducts = products.slice(0, 10); // Simulated top 10

  return (
    <div className="my-10 px-4">
      <h2 className="text-2xl font-semibold mb-4">Our Best Sellers</h2>
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide snap-x"
      >
        {bestSellingProducts.map((product) => (
          <div key={product.id} className="snap-start min-w-[250px]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellersCarousel;
