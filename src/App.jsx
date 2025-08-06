import Navbar from "./components/navbar/Navbar";
import ImageSlider from "./components/imageslider/ImageSlider";
import ProductGrid from "./components/productgrid/ProductGrid";
function App() {
  return (
    <div className="bg-primaryIvory">
      <Navbar />
      <ImageSlider />
      <ProductGrid />
    </div>
  );
}

export default App;
