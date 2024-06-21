"use client";
import React, { useState, useEffect } from 'react';
import { PinContainer } from "../ui/3d-pin";

const Projects = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className='flex flex-col text-center justify-center items-center pt-20' id='projects'>
        <h2 className='text-3xl font-bold dark:text-white uppercase'> a selection of so <span className='text-berry'>many projects</span> </h2>
       
      <div className="h-[40rem] w-full flex items-center justify-center ">
        {isMounted && (
          <PinContainer
            title="/ui.aceternity.com"
            href="https://twitter.com/mannupaaji"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                Aceternity UI
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">
                  Customizable Tailwind CSS and Framer Motion Components.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-berry-200 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
        )}
      </div>
    </section>
  );
}

export default Projects;
