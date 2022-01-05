import React from "react";

const Footer = () => {
  return (
    <div className="mt-12 lg:mt-18 sm:pb-36 sm:py-12 py-12">
      <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
        <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
        <div className="flex flex-col justify-between lg:flex-row items-center">
          <p>
            Built with Next.js, Tailwind and OpenSus | Kappa • 2018 -{" "}
            {new Date().getFullYear()}
          </p>
          <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
            <a
              href="https://unnamedsoftware.com/kappa/twitter"
              className={"transition-colors hover:text-blue-400"}
              target="_blank"
              rel="noreferer"
            >
              Twitter
            </a>
            <a
              href="https://unnamedsoftware.com/kappa/linkedin"
              className={"transition-colors hover:text-blue-800"}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://unnamedsoftware.com/kappa/github"
              className={"transition-colors hover:text-gray-500"}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://git.vogklis.com"
              className={"transition-colors hover:text-gray-500"}
              target="_blank"
              rel="noreferrer"
            >
              Git Server
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
