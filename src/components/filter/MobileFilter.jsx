import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiFilter } from "react-icons/fi";

const MobileFilter = ({ onFilter }) => {
  const [priceRange, setPriceRange] = useState([250, 7290]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [open, setOpen] = useState(false);

  const handleRatingToggle = (rating) => {
    if (selectedRatings.includes(rating)) {
      setSelectedRatings(selectedRatings.filter((r) => r !== rating));
    } else {
      setSelectedRatings([...selectedRatings, rating]);
    }
  };

  const handleFilter = () => {
    onFilter({ priceRange, selectedRatings });
    setOpen(false);
  };

  return (
    <div className="block lg:hidden mb-4 ml-4">
      {/* Filter toggle button */}
      <button
        className="flex items-center gap-2 bg-secondarySage text-white px-4 py-2 rounded-full shadow-md"
        onClick={() => setOpen(!open)}
      >
        <FiFilter size={18} /> Filters
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-3 p-4 bg-white rounded-lg shadow-lg border border-gray-300"
          >
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

            {/* Apply Button */}
            <button
              onClick={handleFilter}
              className="bg-secondarySage hover:bg-secondaryLeaf text-white px-4 py-2 rounded-full text-sm w-full mt-4"
            >
              Apply Filters
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileFilter;
