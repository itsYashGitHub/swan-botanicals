import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const ImageSlider = () => {
  const slides = [img1, img2, img1, img2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex =
      currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex =
      currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="overflow-hidden h-[500px] w-full m-auto relative group">
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
            className="w-full flex-shrink-0 object-cover h-[500px]"
          />
        ))}
      </div>

      {/* Left arrow */}
      <div
        onClick={prevSlide}
        className="hidden group-hover:block absolute top-[50%] left-5 -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-10"
      >
        <BsChevronCompactLeft size={30} />
      </div>

      {/* Right arrow */}
      <div
        onClick={nextSlide}
        className="hidden group-hover:block absolute top-[50%] right-5 -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-10"
      >
        <BsChevronCompactRight size={30} />
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 w-full flex justify-center items-center gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="text-sm cursor-pointer"
          >
            <RxDotFilled
              className={`${
                currentIndex === index
                  ? "text-secondarySage"
                  : "text-accentCharcoal"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
