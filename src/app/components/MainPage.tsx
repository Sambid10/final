
import { Geist, Geist_Mono,Anton } from "next/font/google";
const anton=Anton({
  variable: "--font-geist-anton",
  subsets: ["latin"],
  weight:"400"
})

import React from "react";
import Image from "next/image";
export default function MainPage() {
  return (
    <div className="h-[calc(100dvh-64px)] flex items-center px-6 md:px-0 w-full">
      <div className="flex w-full items-center">
        <div className="flex flex-col gap-6 md:pl-6 lg:pl-12 w-full md:w-[60%] h-full">
          <div>
            <h1
              style={{ lineHeight: "100%" , wordSpacing: "-0.1em"}}
              className={` text-[5.3rem] md:text-[5.7rem] font-bold ${anton.className}`}
            >
              Jhee Tattoo Studio
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 pl-2 italic">
              - Where Art Meets Skin
            </p>
          </div>
          <div className="flex gap-4">
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
            <button className="flex items-center gap-2 cursor-pointer bg-indigo-600 shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] rounded-full hover:bg-[rgba(0,118,255,0.9)] px-8 py-3   text-white font-light transition duration-200 ease-linear">
              <h1 className="text-base font-semibold leading-6  text-white">
                Gallery{" "}
              </h1>
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
            </button>
          </div>
        </div>
        <div className="w-[40%] hidden md:block relative h-[calc(100dvh-64px)]  ">
          <Image src={"/lol.jpg"} fill alt="pic" className=" object-cover" />
        </div>
      </div>
    </div>
  );
}
