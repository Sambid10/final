"use client";
import React from "react";
import { motion } from "framer-motion";

export const Service = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-6 py-16 text-gray-200">
      <div className="mb-8 flex flex-col items-center justify-center gap-4 md:flex-row md:items-end md:px-8 ">
        <div className="flex items-center gap-2 md:gap-6">
          <h2 className="max-w-7xl mx-auto text-4xl font-bold md:text-5xl ">
            Our Services
          </h2>
          <button className="bg-slate-800 w-fit no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-base font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 md:py-3 px-4 ring-1 ring-white/10 ">
              <span>Learn More</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                ></path>
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
          </button>
        </div>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-6">
          <CardTitle>Professional Piercing</CardTitle>
          <h1 className="text-slate-400 md:mt-2 mt-1 text-sm md:text-base tracking-wide">
            Jhee Tattoo Studio provides professional body piercing services,
            emphasizing safety, precision, and comfort with sterilized,
            high-quality jewelry and strict hygiene standards.{" "}
          </h1>
          <div
            style={{
              backgroundImage: "url('pier.jpg')", // Replace with your image URL
              backgroundSize: "cover", // Optional, adjusts how the image fits
              backgroundRepeat: "no-repeat", // Optional, prevents repeating
              backgroundPosition: "center", // Optional, positions the image
            }}
            className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]"
          ></div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-6">
          <CardTitle>Custom Tattooing</CardTitle>

          <h1 className="text-slate-400 md:mt-2 mt-1 text-sm md:text-base tracking-wide">
            At Jhee Tattoo Studio, we specialize in high-quality custom tattoos
            tailored to each client’s vision.
          </h1>
          <div
            style={{
              backgroundImage: "url('pic.jpg')", // Replace with your image URL
              backgroundSize: "cover", // Optional, adjusts how the image fits
              backgroundRepeat: "no-repeat", // Optional, prevents repeating
              backgroundPosition: "center", // Optional, positions the image
            }}
            className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]"
          ></div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Cover Up & Rework</CardTitle>
          <h1 className="text-slate-400 md:mt-2 mt-1 text-sm md:text-base tracking-wide">
            Transform or refresh old tattoos into something new and meaningful.
          </h1>
          <div
            style={{
              backgroundImage: "url('after.jpg')", // Replace with your image URL
              backgroundSize: "cover", // Optional, adjusts how the image fits
              backgroundRepeat: "no-repeat", // Optional, prevents repeating
              backgroundPosition: "center", // Optional, positions the image
            }}
            className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]"
          >
            <span className="block text-center font-semibold text-red-50"></span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Tattoo & Piercing Aftercare</CardTitle>
          <h1 className="text-slate-400 md:mt-2 mt-1 text-sm md:text-base tracking-wide">
          We prioritize your healing and studio experience by providing clear aftercare instructions for tattoos and piercings to ensure proper recovery and lasting results.
          </h1>
          <div
            style={{
              backgroundImage: "url('agtercare.png')", // Replace with your image URL
              backgroundSize: "cover", // Optional, adjusts how the image fits
              backgroundRepeat: "no-repeat", // Optional, prevents repeating
              backgroundPosition: "center", // Optional, positions the image
            }}
            className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-2 group-hover:rotate-[1deg]"
          >
            <span className="block text-center font-semibold text-emerald-50"></span>
          </div>
        </BounceCard>
      </div>
    </section>
  );
};

const BounceCard = ({
  className,
  children,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 0.99, rotate: "-1deg" }}
      className={`group relative border border-gray-700 min-h-[350px] cursor-pointer overflow-hidden rounded bg-zinc-900 lg:p-8 p-4 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="mx-auto text-center text-[1.70rem] md:text-3xl font-semibold">{children}</h3>
  );
};
