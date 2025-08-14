import { useEffect, useRef } from "react";
import testimonials from "./testimonials";
import TestimonialCard from "./TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsCarousel = () => {
  const scrollRef = useRef(null);
  const indexRef = useRef(0); // track which card is active

  const centerCardAtIndex = (i) => {
    const container = scrollRef.current;
    if (!container) return;

    const children = container.children;
    const count = children.length;
    if (!count) return;

    // wrap index
    const idx = ((i % count) + count) % count;
    const cardEl = children[idx];

    // position of the card relative to the scroll container
    const cRect = container.getBoundingClientRect();
    const elRect = cardEl.getBoundingClientRect();
    const relativeLeft = elRect.left - cRect.left + container.scrollLeft;

    // center target
    const targetLeft =
      relativeLeft - (container.clientWidth - cardEl.clientWidth) / 2;

    container.scrollTo({ left: Math.max(0, targetLeft), behavior: "smooth" });
    indexRef.current = idx;
  };

  const next = () => centerCardAtIndex(indexRef.current + 1);
  const prev = () => centerCardAtIndex(indexRef.current - 1);

  // Auto-scroll every 3s
  useEffect(() => {
    // center first card on mount
    const id0 = requestAnimationFrame(() => centerCardAtIndex(0));

    const interval = setInterval(next, 3000);

    // recenter on resize/orientation change
    const onResize = () => centerCardAtIndex(indexRef.current);
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    return () => {
      cancelAnimationFrame(id0);
      clearInterval(interval);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, []);

  return (
    <section className="py-12 px-4 relative">
      <h2 className="text-2xl font-bold text-center mb-6"> Our Testimonials</h2>

      <div className="relative max-w-7xl mx-auto">
        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth px-2"
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
