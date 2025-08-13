import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar"
import ProductGrid from "../components/productgrid/ProductGrid";

const Shop = () => {
  return (
    <div className="bg-primaryIvory">
      <Navbar />
      <h1 className="text-3xl font-bold text-accentForest mt-12 ml-4">Our Products</h1>
      <ProductGrid />
      <Footer />
    </div>
  )
}

export default Shop
