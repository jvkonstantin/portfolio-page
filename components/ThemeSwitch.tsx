import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import useSound from "use-sound";
import { AnimatePresence } from "framer-motion";

import { motion, isValidMotionProp } from "framer-motion";
const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  const [play] = useSound("/assets/audios/lightswitch.mp3", {
    volume: 0.05,
    sprite: {
      on: [0, 300],
      off: [500, 300],
    },
  });

  const handleClick = () => {
    theme === "dark" ? play({ id: "on" }) : play({ id: "off" });
    setTheme(theme === "dark" || resolvedTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => setMounted(true), []);

  return (
    // <button
    //   aria-label="Toggle Dark Mode"
    //   type="button"
    //   className="w-8 h-8 [-1 ml-1 mr-1 rounded sm:ml-4"
    //   onClick={handleClick}
    // >
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     viewBox="0 0 20 20"
    //     fill="currentColor"
    //     className="text-gray-900 dark:text-gray-100"
    //   >
    //     {mounted && (theme === "dark" || resolvedTheme === "dark") ? (
    //       <FaSun />
    //     ) : (
    //       <FaMoon />
    //     )}
    //   </svg>
    // </button>
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        onClick={handleClick}
        key={theme === "dark" ? "dark-icon" : "light-icon"}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={"cursor-pointer sm:text-sm md:text-base lg:text-lg"}
      >
        {theme === "dark" ? "🌤" : "🌙"}
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeSwitch;
