import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";
const Navigation = () => {
  return (
    <div className="sticky top-0 z-20 bg-white border-b-2 border-primary dark:border-borderColor md:py-6 dark:bg-black">
      <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
        <Link href="/">
          <a
            className={
              "font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"
            }
          >
            Fappas
          </a>
        </Link>

        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Navigation;
