"use client";
import React, { useState, useEffect } from 'react';
import { PinContainer } from "../ui/3d-pin";
import { projects } from '@/data';

const Projects = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className='flex flex-col text-center justify-center items-center pt-20' id='projects'>
        <h2 className='text-3xl font-bold dark:text-white uppercase'> a selection of  <span className='text-berry'>many projects</span> </h2>
       
      
      <div className="grid grid-col-1 md:grid-cols-2 md:grid-rows-2 py-20 gap-14">
        {isMounted && projects.map((project, id) => (
          <PinContainer
            title={project.title}
            href={project.link}
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
           
              {/* image */}
              <div className="relative overflow-hidden flex flex-1 items-end w-full rounded-lg mt-4 bg-gradient-to-br from-berry-200 via-purple-500 to-blue-500" >
                  
                  <div className='rotate-12 rounded-2xl relative overflow-hidden w-full top-7' >
                   
                   <img src={project.img} 
                       alt={project.title}
                        />
                  
                  </div>
             
               </div>
             
              <div className='mt-10 text-start '>
                  <h3 className="max-w-xs font-bold text-base text-slate-100">
                      {project.title}
                  </h3>
                  <div className="text-base font-normal">
                    <span className="text-slate-500">
                      {project.des}
                    </span>
                  </div>
              </div>


            </div>
          </PinContainer>
        ))}
      </div>
    </section>
  );
}

export default Projects;
