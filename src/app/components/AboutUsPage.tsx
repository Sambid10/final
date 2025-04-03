import React from "react";
import { WobbleCard } from "./WobbleCard";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen px-6 flex justify-center items-center">
      <WobbleCard className="relative z-0 rounded">
      <div
        style={{
          backgroundImage: "url('6.jpg')", // Replace with your image URL
          backgroundSize: "cover", // Optional, adjusts how the image fits
          backgroundRepeat: "no-repeat", // Optional, prevents repeating
          backgroundPosition: "center", // Optional, positions the image
        }}
        className="hidden md:block md:w-full h-[70vh] rounded shadow-[0_6px_20px_rgba(128,128,128,0.3)]"
      ></div>
      </WobbleCard>
    
      <div className="w-full relative z-20 min-h-[60vh] flex flex-col gap-6 items-center justify-center   md:-ml-[8rem] bg-zinc-900 px-6 md:py-4 py-2  rounded  shadow-[0_6px_20px_rgba(128,128,128,0.3)]">
        <h1 className="text-center text-4xl font-bold md:text-5xl">About Us</h1>
        <span
          style={{
            lineHeight: "160%",
          }}
          className="mt-5 tracking-wide text-lg text-gray-200"
        >
          <p className="text-2xl">Jhee Tattoo Studio– Where Art Meets Skin</p>{" "}
          <br />
          <p className="mt-[-1rem] text-slate-300">
            Located in the heart of Thamel, Kathmandu, Jhee Tattoo Studio is a
            creative hub for tattoo and piercing enthusiasts. Whether you're a
            local or a traveler looking for a meaningful souvenir, our studio
            provides a welcoming and professional space where artistry and
            self-expression come to life.
          </p>
        </span>
        <div className="flex justify-end w-full">
          <button className="bg-slate-800 w-fit no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-base font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-3 px-4 ring-1 ring-white/10 ">
              <span>Read More</span>
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
     
    </div>
  );
}
