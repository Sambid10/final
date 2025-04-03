import React from "react";
import FooterLinks from "./HoverLinks";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Footer() {
  return (
    <div
      className="relative h-[350px] w-full bg-zinc-900 "
      style={{ clipPath: "polygon(0% 0,100% 0%,100% 100%,0 100%)" }}
    >
      <div className="fixed bottom-0 h-[350px] w-full bg-zinc-900">
        <Content />
      </div>
    </div>
  );
}

export function Content() {
  return (
    <div className="text-gray-200 h-full relative flex flex-col px-4 lg:px-6 py-2 mb-2 ">
      <div className="h-[50%] flex justify-between items-center ">
        <div className="lg:text-6xl flex-col   text-3xl md:text-5xl font-semibold h-full flex justify-center">
          <h1>LOGO</h1>
          <h1 className="text-lg md:text-xl  text-slate-400 font-normal">
            2025 ©Jhee Tattoo Studio.{" "}
          </h1>
          <h1 className="text-lg text-slate-400 font-normal -mt-[0.4rem]">
            All rights reserved.
          </h1>
        </div>
        <div className="text-sm lg:text-xl font-light h-full flex items-center">
          <div className="flex flex-col gap-2">
          <span className="flex items-center gap-2">
              <span className="inline-flex md:h-8 md:w-8 h-6 w-6  items-center justify-center rounded-full border border-zinc-700 bg-black p-1">
                <MdEmail color="green" />
              </span>
              <h1 className="text-gray-200">sambidshk10@gmail.com</h1>
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-flex md:h-8 md:w-8 h-6 w-6  items-center justify-center rounded-full border border-zinc-700 bg-black p-1">
                <FaMapMarkerAlt color="red"  />
              </span>
              <h1 className="text-gray-200">Chaksibari Marg, Kathmandu 44600</h1>
            </span>
          </div>
        </div>
      </div>
      <div className=" h-[1px]  bg-gray-700 w-full" />
      <div className="h-[50%]">
        <FooterLinks />
      </div>
    </div>
  );
}
