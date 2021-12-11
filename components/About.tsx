import React from "react";
import Image from "next/image";
import profile from "../public/assets/photos/hide.png";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>Fappas | Home</title>
      </Head>
      <div className="container px-4 mx-auto">
        <div className="lg:space-x-5 lg:flex lg:flex-row items-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
          <div className="lg:px-4 lg:mt-12">
            <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
              Hey there,
            </h1>
            <div className="mt-6 text-gray-800 dark:text-white">
              <p className="mb-4">
                Im Kappa, a web developer and general linux programmer. I
                currently reside in the free country of {"[REDACTED]"} and my
                real name is {"[REDACTED]"}
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 lg:mt-12 lg:px-5 mb-10 ">
            <div className="flex rounded-full border-4 border-black border-dashed dark:border-white ">
              <Image
                src="http://scwp.unnamedsoftware.com/hide.png"
                alt="Profile"
                priority={true}
                className="rounded-full  object-cover"
                width={250}
                height={250}
                // placeholder="blur"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
