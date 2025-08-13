import items from "./items";
import { motion } from "framer-motion";

export default function Timeline() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-6 text-center text-emerald-900">
        Swan Botanicals: Where Nature Meets Science
      </h2>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-200 to-rose-100 rounded" />

        <ul className="space-y-8 md:space-y-12">
          {items.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <li
                key={idx}
                className="relative md:flex md:items-center md:justify-between"
                aria-label={`Timeline step ${idx + 1}: ${item.title}`}
              >
                {/* Mobile layout */}
                <div className="md:hidden flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-4 w-4 rounded-full bg-emerald-200 border-2 border-emerald-400 shadow-sm" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="ml-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md"
                  >
                    <h3 className="font-bold text-xl text-emerald-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-emerald-700">
                      {item.content}
                    </p>
                  </motion.div>
                </div>

                {/* Desktop alternating layout with images */}
                <div className="hidden md:flex md:items-center md:w-full">
                  {isLeft ? (
                    <>
                      <div className="w-1/2 p-6 text-right pr-12">
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: idx * 0.15 }}
                          className="inline-block bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg max-w-md relative z-10"
                        >
                          <h3 className="font-bold text-2xl text-emerald-900">
                            {item.title}
                          </h3>
                          <p className="mt-3 text-emerald-700 leading-relaxed">
                            {item.content}
                          </p>
                        </motion.div>
                      </div>
                      <div className="w-0 md:w-12 flex items-center justify-center relative z-10">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            type: "spring",
                            stiffness: 120,
                            delay: 0.05 + idx * 0.1,
                          }}
                          className="h-6 w-6 rounded-full bg-emerald-200 border-2 border-emerald-400 flex items-center justify-center"
                          aria-hidden
                        >
                          <div className="h-2 w-2 rounded-full bg-emerald-600" />
                        </motion.div>
                      </div>
                      <div className="w-1/2">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="rounded-2xl shadow-lg object-cover w-full h-64"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="rounded-2xl shadow-lg object-cover w-full h-64"
                        />
                      </div>
                      <div className="w-0 md:w-12 flex items-center justify-center relative z-10">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            type: "spring",
                            stiffness: 120,
                            delay: 0.05 + idx * 0.1,
                          }}
                          className="h-6 w-6 rounded-full bg-emerald-200 border-2 border-emerald-400 flex items-center justify-center"
                          aria-hidden
                        >
                          <div className="h-2 w-2 rounded-full bg-emerald-600" />
                        </motion.div>
                      </div>
                      <div className="w-1/2 p-6 text-left pl-12">
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: idx * 0.15 }}
                          className="inline-block bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg max-w-md relative z-10"
                        >
                          <h3 className="font-bold text-2xl text-emerald-900">
                            {item.title}
                          </h3>
                          <p className="mt-3 text-emerald-700 leading-relaxed">
                            {item.content}
                          </p>
                        </motion.div>
                      </div>
                    </>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <p className="mt-10 text-center text-lg text-secondarySage">
        Swan Botanicals was born from a unwavering desire to create skincare
        that’s safe, honest, and nurturing. Inspired by love and loss, every
        product reflects her promise—pure, botanical care without fear or side
        effects, crafted to heal gently and visibly.
      </p>
    </section>
  );
}
