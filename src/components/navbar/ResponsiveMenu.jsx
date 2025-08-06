import { AnimatePresence, motion } from "framer-motion";

const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y:0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full z-20"
        >
          <div className="text-xl font-semibold uppercase bg-accentForest text-primaryIvory py-10 m-6 rounded-2xl">
            <ul className="flex flex-col justify-center items-center gap-10">
                <li className="cursor-pointer hover:text-secondarySand">Home</li>
                <li className="cursor-pointer hover:text-secondarySand">About</li>
                <li className="cursor-pointer hover:text-secondarySand">Shop</li>
                <li className="cursor-pointer hover:text-secondarySand">Contact</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
