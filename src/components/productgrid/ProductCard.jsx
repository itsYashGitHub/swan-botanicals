// components/ProductCard.jsx


const ProductCard = ({ product }) => {
  const {
    name,
    image,
    rating,
    originalPrice,
    discountPrice,
    discount,
  } = product;

  return (
    <div className="border p-4 rounded-md shadow-sm relative hover:shadow-md transition bg-white">
      {/* Show discount only if > 0 */}
      {discount > 0 && (
        <div className="absolute top-2 left-2 bg-primaryMint text-black text-xs font-semibold px-2 py-1 rounded">
          -{discount}%
        </div>
      )}

      <img
        src={image}
        alt={name}
        className="h-40 w-full object-contain mb-4"
      />

      <h3 className="text-sm font-semibold mb-1 leading-tight">{name}</h3>

      <div className="text-yellow-300 text-sm mb-1">
        {"★".repeat(rating)}{"☆".repeat(5 - rating)}
      </div>

      <div className="text-sm mb-1">
        <span className="line-through text-gray-400 mr-2">
          ₹{originalPrice}
        </span>
        <span className="text-black font-semibold">₹{discountPrice}</span>
      </div>

      <p className="text-xs text-gray-500 mb-4">Inclusive of all taxes</p>

      <button className="w-full bg-secondarySage hover:bg-secondaryLeaf text-white font-medium py-2 rounded">
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
