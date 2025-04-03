"use client"
import Image from 'next/image';
import React from 'react';
import { useRef } from 'react';
import gsap from 'gsap';

export default function FloatingImg() {
    const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e
    xForce += movementX * speed;
    yForce += movementY * speed;

    if(requestAnimationFrameId == null){
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  }

  const lerp = (start, target, amount) => start * (1 - amount) +target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, {x: `+=${xForce}`, y: `+=${yForce}`})
    gsap.set(plane2.current, {x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}`})
    gsap.set(plane3.current, {x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}`})

    if(Math.abs(xForce) < 0.01) xForce = 0;
    if(Math.abs(yForce) < 0.01) yForce = 0;
    
    if(xForce != 0 || yForce != 0){
      requestAnimationFrame(animate);
    }
    else{
      cancelAnimationFrame(requestAnimationFrameId)
      requestAnimationFrameId = null;
    }
  }
  return (
    <div onMouseMove={(e) => {manageMouseMove(e)}} className='relative min-h-screen mx-auto max-w-[100vw] overflow-hidden'>
      <div ref={plane1} className='plane  sm:block'>
        <Image 
          alt='img'
          src="/1.jpg"
          width={300}
          height={250}
        />
        <Image 
          alt='img'
          src="/2.jpg"
          width={200}
          height={200}
        />
        <Image 
          alt='img'
          src="/7.jpg"
          width={400}
          height={300}
        />
      </div>

      <div ref={plane2} className='plane  md:block'>
        <Image 
          alt='img'
          src="/4.jpg"
          width={320}
          height={400}
        />
        <Image 
          alt='img'
          src="/5.jpg"
          width={300}
          height={400}
        />
        <Image 
          alt='img'
          src="/6.jpg"
          width={240}
          height={400}
        />
      </div>

      <div ref={plane3} className='plane  lg:block'>
        <Image 
          alt='img'
          src="/3.jpg"
          width={200}
          height={250}
        />
        <Image 
          alt='img'
          src="/8.jpg"
          width={380}
          height={200}
        />
     
      </div>
      <div className={"title flex flex-col items-center justify-center gap-3"}>
        <h1 className='max-w-7xl mx-auto text-4xl font-bold md:text-5xl'>Check Out my Work here..</h1>
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
  );
}