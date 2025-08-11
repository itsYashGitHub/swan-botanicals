import { Leaf, Heart, Smile, Globe, CheckCircle2, Rabbit } from "lucide-react";

const values = [
  {
    icon: <Rabbit className="w-8 h-8" />,
    title: "Cruelty Free",
    description:
      "No animal testing—ever. Ethical beauty you can feel good about.",
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Natural & Botanical",
    description: "Our products are powered by nature's finest ingredients.",
  },
  {
    icon: <Smile className="w-8 h-8" />,
    title: "Customer Oriented",
    description:
      "Every formula and feature is crafted with your needs in mind.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Love & Care",
    description: "We put heart into every bottle—from sourcing to packaging.",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8" />,
    title: "Quality & Results",
    description: "High-performance skincare backed by visible results.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Sustainability",
    description: "Eco-conscious practices for a cleaner, greener future.",
  },
];

const ValuesSection = () => {
  return (
    <section className="py-12 px-4 text-center">
      <h2 className="text-3xl font-bold mb-2">Nature meets Science</h2>
      <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
        We're committed to crafting skincare that not only transforms your skin,
        but also reflects your values.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {values.map((value, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="text-secondarySage mb-3">{value.icon}</div>
            <h3 className="font-semibold text-lg mb-1">{value.title}</h3>
            <p className="text-sm text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;
