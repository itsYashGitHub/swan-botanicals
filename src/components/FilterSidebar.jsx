import { useState } from "react";

const FilterSidebar = ({ onFilter }) => {
  const [priceRange, setPriceRange] = useState([250, 7290]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  const handleRatingToggle = (rating) => {
    if (selectedRatings.includes(rating)) {
      setSelectedRatings(selectedRatings.filter((r) => r !== rating));
    } else {
      setSelectedRatings([...selectedRatings, rating]);
    }
  };

  const handleFilter = () => {
    onFilter({ priceRange, selectedRatings });
  };

  return (
    <div className="w-[300px] p-4 hidden lg:block ml-10 mt-10">
      {/* Price Filter */}
      <h2 className="font-semibold mb-2">Filter by price</h2>
      <input
        type="range"
        min="250"
        max="7290"
        value={priceRange[1]}
        onChange={(e) => setPriceRange([250, Number(e.target.value)])}
        className="w-full accent-primaryMint"
      />
      <div className="text-sm mt-2 mb-4">
        Price: ₹{priceRange[0]} – ₹{priceRange[1]}
      </div>

      <button
        onClick={handleFilter}
        className="bg-secondarySage hover:bg-secondaryLeaf text-white px-4 py-2 rounded-full text-sm mb-4"
      >
        FILTER
      </button>

      <hr className="my-4" />

      {/* Rating Filter */}
      <h2 className="font-semibold mb-2">Average Rating</h2>
      {[5, 4].map((rating) => (
        <div
          key={rating}
          className="flex items-center gap-2 mb-2 cursor-pointer"
          onClick={() => handleRatingToggle(rating)}
        >
          <input
            type="checkbox"
            checked={selectedRatings.includes(rating)}
            onChange={() => handleRatingToggle(rating)}
          />
          <span className="text-yellow-500">
            {"★".repeat(rating)}
            {"☆".repeat(5 - rating)}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FilterSidebar;
