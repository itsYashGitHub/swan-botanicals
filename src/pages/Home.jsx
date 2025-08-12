import Navbar from "../components/navbar/Navbar";
import ImageSlider from "../components/ImageSlider";
import ProductGrid from "../components/productgrid/ProductGrid";
import BestSellersCarousel from "../components/BestSellersCarousel";
import ValuesSection from "../components/ValuesSection";
import TestimonialsCarousel from "../components/testimonials/TestimonialsCarousel";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="bg-primaryIvory">
      <Navbar />
      <ImageSlider />
      <div id="products">
        <ProductGrid limit={8} />
      </div>
      <div id="bestsellers">
        <BestSellersCarousel />
      </div>
      <div id="values">
        <ValuesSection />
      </div>
      <div id="testimonials">
        <TestimonialsCarousel />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
