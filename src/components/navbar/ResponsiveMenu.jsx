import { AnimatePresence, motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { NavbarMenu } from "./data";

const ResponsiveMenu = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full z-20"
        >
          <div className="text-xl font-semibold uppercase bg-secondarySage text-accentForest py-10 m-6 rounded-2xl">
            <ul className="flex flex-col justify-center items-center gap-10">
              {NavbarMenu.map((item) => {
                const isActive = location.pathname === item.link;
                return (
                  <li
                    key={item.link}
                    className={`cursor-pointer transition-colors ${
                      isActive
                        ? "text-gray-800 font-extrabold"
                        : "hover:text-gray-800"
                    }`}
                    onClick={() => {
                      navigate(item.link);
                      setOpen(false);
                    }}
                  >
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
