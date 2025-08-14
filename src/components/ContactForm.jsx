import { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaRobot } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import nature from "../assets/nature.jpeg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData); // send data to backend

    toast.success("Form submitted successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: {
        backgroundColor: "primaryMint",
        color: "accentCharcoal",
        fontWeight: "bold",
        borderRadius: "0.5rem",
      },
      progressStyle: {
        backgroundColor: "#2A4D3A",
      },
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${nature})` }}
    >
      <div className="min-h-screen">
        {/* Contact Section */}
        <div className="container mx-auto flex justify-center py-16">
          <div className="rounded-xl shadow-lg w-full max-w-lg p-8 bg-white/20 backdrop-blur-lg border border-white/30">
            <h1 className="text-2xl font-semibold text-white mb-6 text-center">
              Contact Us
            </h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-1/2 p-3 rounded-lg border border-white focus:outline-none bg-transparent text-white placeholder-white"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-1/2 p-3 rounded-lg border border-white focus:outline-none bg-transparent text-white placeholder-white"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-white focus:outline-none bg-transparent text-white placeholder-white"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-white focus:outline-none bg-transparent text-white placeholder-white"
              />
              <textarea
                name="message"
                placeholder="How can we help?"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 rounded-lg border border-white focus:outline-none bg-transparent text-white placeholder-white"
              ></textarea>
              <button
                type="submit"
                className="bg-accentForest hover:bg-green-950 text-white py-3 px-6 rounded-lg transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-3">
          {[
            {
              href: "https://wa.me/1234567890",
              icon: <FaWhatsapp size={20} />,
              hoverColor: "hover:bg-[#25D366]",
            },
            {
              href: "mailto:info@company.com",
              icon: <FaEnvelope size={20} />,
              hoverColor: "hover:bg-[#1E3A8A]",
            },
            {
              href: "tel:+1321221231",
              icon: <FaPhoneAlt size={20} />,
              hoverColor: "hover:bg-[#0F9D58]",
            },
            { href: "#", icon: <FaRobot size={20} />, hoverColor: "hover:bg-[#8A2BE2]" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full shadow-lg text-white bg-white/20 backdrop-blur-lg border border-white/30 transition-colors duration-300 ${item.hoverColor}`}
            >
              {item.icon}
            </a>
          ))}
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default ContactForm;
