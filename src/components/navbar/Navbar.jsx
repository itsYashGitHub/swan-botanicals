import { NavbarMenu } from "./data";
import { CiSearch } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { PiShoppingCart } from "react-icons/pi";
import { useState, useRef, useEffect } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
import mainLogo from "../../assets/main-logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../../context/CartContext";

const fullPlaceholder = "Search for skincare...";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showHomeDropdown, setShowHomeDropdown] = useState(false);
  const [placeholder, setPlaceholder] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const searchRef = useRef(null);
  const { cart } = useCart();

  // Smooth scroll helper
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const handleHomeDropdownClick = (id) => {
    if (location.pathname === "/") {
      scrollToSection(id);
    } else {
      navigate("/", { replace: false });
      setTimeout(() => {
        scrollToSection(id);
      }, 300);
    }
    setShowHomeDropdown(false);
  };

  // Typing animation
  useEffect(() => {
    let timeoutId = null;
    let mounted = true;

    const startTyping = (idx = 0) => {
      if (!mounted) return;
      if (idx < fullPlaceholder.length) {
        setPlaceholder((prev) => prev + fullPlaceholder.charAt(idx));
        timeoutId = setTimeout(() => startTyping(idx + 1), 80);
      }
    };

    if (showSearch) {
      setPlaceholder("");
      setTimeout(() => {
        if (searchRef.current) searchRef.current.focus();
      }, 0);
      startTyping(0);
    }

    return () => {
      mounted = false;
      if (timeoutId) clearTimeout(timeoutId);
      setPlaceholder("");
    };
  }, [showSearch]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 border-b border-gray-400 bg-primaryIvory shadow-lg z-50">
        <div className="container flex justify-between items-center relative">
          {/* Logo */}
          <img
            className="h-13 w-12 cursor-pointer"
            src={mainLogo}
            alt="logo"
            onClick={() => navigate("/")}
          />

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600 relative bg-primaryIvory">
              {/* Home with dropdown */}
              <li
                className="relative group"
                onMouseEnter={() => setShowHomeDropdown(true)}
                onMouseLeave={() => setShowHomeDropdown(false)}
              >
                <button
                  onClick={handleHomeClick}
                  className={`inline-flex items-center gap-1 py-1 px-3 font-semibold transition-all duration-200 relative ${
                    location.pathname === "/"
                      ? "text-accentForest"
                      : "hover:text-accentForest"
                  }`}
                >
                  Home
                  <motion.span
                    animate={{ rotate: showHomeDropdown ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="inline-block text-[0.4rem]"
                  >
                    ▼
                  </motion.span>
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-accentForest transition-all duration-300 ${
                      location.pathname === "/" || showHomeDropdown
                        ? "w-full"
                        : "w-0"
                    }`}
                  ></span>
                </button>

                <AnimatePresence>
                  {showHomeDropdown && (
                    <motion.ul
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="absolute left-0 mt-3 w-60 bg-secondarySage shadow-xl rounded-lg py-4 border border-gray-800"
                    >
                      {[
                        { name: "Products", id: "products" },
                        { name: "Best Sellers", id: "bestsellers" },
                        { name: "Our Values", id: "values" },
                        { name: "Testimonials", id: "testimonials" },
                      ].map((link, idx) => (
                        <motion.li
                          key={link.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="px-6 py-3 hover:bg-accentForest hover:text-white cursor-pointer text-accentCharcoal font-medium transition-all duration-200"
                          onClick={() => handleHomeDropdownClick(link.id)}
                        >
                          {link.name}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              {/* Other menu items */}
              {NavbarMenu.filter((item) => item.title !== "Home").map(
                (item) => {
                  const isActive = location.pathname === item.link;
                  return (
                    <li key={item.id} className="relative group">
                      <a
                        href={item.link}
                        className={`inline-block py-1 px-3 font-semibold transition-colors ${
                          isActive
                            ? "text-accentForest"
                            : "hover:text-accentForest"
                        }`}
                      >
                        {item.title}
                        <span
                          className={`absolute bottom-0 left-0 h-[2px] bg-accentForest transition-all duration-300 ${
                            isActive ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                        ></span>
                      </a>
                    </li>
                  );
                }
              )}
            </ul>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <button
                className="text-2xl hover:bg-accentCharcoal hover:text-white rounded-full p-2 duration-200"
                onClick={() => setShowSearch((prev) => !prev)}
              >
                <CiSearch className="text-2xl" />
              </button>
              <AnimatePresence>
                {showSearch && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full right-0 md:right-auto md:left-auto md:mt-2 mt-2 z-50 w-full flex justify-center md:justify-end"
                  >
                    <div
                      className="
          flex items-center border-2 border-accentForest rounded-lg bg-white px-2 py-1 
          shadow-sm
          w-[90vw] max-w-sm md:w-64
        "
                    >
                      <CiSearch className="text-gray-500 text-lg mr-2" />
                      <input
                        ref={searchRef}
                        type="text"
                        placeholder={placeholder}
                        className="flex-1 text-sm focus:outline-none"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Cart */}
            <button
              className="relative text-2xl hover:bg-accentCharcoal hover:text-white rounded-full p-2 duration-200"
              onClick={() => navigate("/cart")}
            >
              <PiShoppingCart className="text-2xl" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
                  {cart.length}
                </span>
              )}
            </button>

            {/* Login */}
            <button className="hover:bg-accentCharcoal bg-secondarySage text-primary font-semibold hover:text-white rounded-md border-2 border-black px-5 py-1 duration-200 hidden md:block">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl hover:bg-accentCharcoal rounded-full p-1 cursor-pointer duration-200" />
          </div>
        </div>
      </nav>

      {/* Mobile sidebar */}
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
