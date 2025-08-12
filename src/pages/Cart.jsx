import Navbar from "../components/navbar/Navbar";
import ProductGrid from "../components/productgrid/ProductGrid";
import Footer from "../components/Footer";
const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="bg-primaryIvory min-h-screen py-8">
        <h1 className="text-3xl font-bold mt-10 ml-10">Your Cart</h1>
        <ProductGrid cartMode={true} />
      </div>
      <Footer />
    </>
  );
};

export default Cart;
