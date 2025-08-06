import Navbar from "./components/navbar/Navbar";
import ImageSlider from "./components/imageslider/ImageSlider";
import ProductGrid from "./components/productgrid/ProductGrid";
import BestSellersCarousel from "./components/BestSellersCarousel";
function App() {
  return (
    <div className="bg-primaryIvory">
      <Navbar />
      <ImageSlider />
      <ProductGrid />
      <BestSellersCarousel />
    </div>
  );
}

export default App;
