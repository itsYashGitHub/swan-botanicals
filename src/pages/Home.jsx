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
      <ProductGrid />
      <BestSellersCarousel />
      <ValuesSection />
      <TestimonialsCarousel />
      <Footer />
    </div>
  );
};

export default Home;
