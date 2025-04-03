"use client";
import useScrollPosition from "@react-hook/window-scroll";
import Link from "next/link";
import { useMemo } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
const useRange = (
  num: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) => {
  const mappedValue = useMemo(() => {
    const newValue =
      ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    const largest = Math.max(outMin, outMax);
    const smallest = Math.min(outMin, outMax);
    return Math.min(Math.max(newValue, smallest), largest);
  }, [num]);

  return mappedValue;
};

export default function Navbar() {
  const y = useScrollPosition(60);
  const navX = useRange(y, 0, 50, 0, 42);
  const logoScale = useRange(y, 0, 50, 1, 0.8);

  return (
    <>
      <header className="flex  items-center justify-between gap-4 bg-black px-6 py-4 pl-18 text-sm">
        <img
          className="fixed  left-6 top-9 md:top-7 -translate-y-1/2  h-9 w-9 z-[51]"
          style={{
            transform: `scale(${logoScale})`,
          }}
          src="/logo.jpg"
        />

        <div>
          <ol className="flex flex-col md:flex-row  md:gap-4 items-start">
            <li aria-hidden className="text-zinc-700 hidden md:block">
              /
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-flex md:h-6 md:w-6 h-5 w-5  items-center justify-center rounded-full border border-zinc-700 bg-black p-1">
                <FaMapMarkerAlt color="red" />
              </span>
              <h1>Chaksibari Marg, Kathmandu 44600</h1>
            </li>
            <li aria-hidden className="text-zinc-700  hidden md:block">
              /
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-flex md:h-6 md:w-6 h-5 w-5  items-center justify-center rounded-full border border-zinc-700 bg-black p-1">
                <FaPhone color="green" />
              </span>
              <h1>+977 984-3643996</h1>
            </li>
          </ol>
        </div>
        <div>
          <ol className="md:flex hidden gap-4 text-md items-center">
            <Link href={"/"} className="flex items-center gap-2">
              <FaInstagram size={26} color="#E4405F" />
              <h1 className="lg:block hidden">Instagram</h1>
            </Link>
            <Link href={"/"} className="flex items-center gap-2">
              <FaFacebook size={26} color="#1877F2" />
              <h1 className="lg:block hidden">Facebook</h1>
            </Link>
          </ol>
        </div>
      </header>
      <nav className="sticky py-2 md:py-0 top-0 flex border-b border-gray-700 bg-zinc-900 text-sm z-50">
        <ol
          style={{
            transform: `translateX(${navX}px)`,
          }}
          className="relative flex gap-5 md:gap-8 px-6 py-4 text-zinc-400 text-base"
        >
          <li>Home</li>
          <li className="text-zinc-200">About Us</li>
          <li>Gallery</li>
          <li>Contacts</li>
        </ol>
      </nav>
    </>
  );
}
