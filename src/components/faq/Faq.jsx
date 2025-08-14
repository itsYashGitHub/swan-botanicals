import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import faqData from "./faqs";

export default function Faq() {
  const [faqs, setFaqs] = useState(
    faqData.map(item => ({ ...item, open: false }))
  );

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((item, i) =>
        i === index ? { ...item, open: !item.open } : item
      )
    );
  };

  return (
    <div className="bg-accentCharcoal py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white/15 backdrop-blur-md border border-white/30"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left font-semibold text-white focus:outline-none"
              >
                {faq.question}
                <FaChevronDown
                  className={`transform transition-transform duration-300 ${
                    faq.open ? "rotate-180" : ""
                  }`}
                />
              </button>
              {faq.open && <p className="text-white mt-2">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
