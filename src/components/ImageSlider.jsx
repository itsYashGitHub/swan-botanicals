import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const ImageSlider = () => {
  const slides = [img1, img2, img1, img2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="overflow-hidden h-[250px] sm:h-[350px] md:h-[500px] w-full m-auto relative group">
      {/* Slide container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className="w-full flex-shrink-0 object-cover h-[250px] sm:h-[350px] md:h-[500px]"
          />
        ))}
      </div>

      {/* Left arrow */}
      <div
        onClick={prevSlide}
        className="hidden group-hover:block absolute top-1/2 left-3 -translate-y-1/2 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer z-10"
      >
        <BsChevronCompactLeft size={30} />
      </div>

      {/* Right arrow */}
      <div
        onClick={nextSlide}
        className="hidden group-hover:block absolute top-1/2 right-3 -translate-y-1/2 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer z-10"
      >
        <BsChevronCompactRight size={30} />
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 w-full flex justify-center items-center gap-1">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="text-sm cursor-pointer"
          >
            <RxDotFilled
              className={`text-lg transition-colors ${
                currentIndex === index
                  ? "text-secondarySage"
                  : "text-accentCharcoal"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
