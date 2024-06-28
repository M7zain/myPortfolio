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
    <section className='flex flex-col text-center justify-center items-center pt-20 ' id='projects'>
        <h2 className='text-3xl font-bold dark:text-white uppercase'> a selection of  <span className='text-berry'>many projects</span> </h2>
       
      
      <div className="grid grid-col-1 md:grid-cols-2 md:grid-rows-2 py-20 gap-14">
        {isMounted && projects.map((project, id) => (
          <PinContainer
            key={project.id}
            title={project.title}
            href={project.link}
          >
            <div className="flex flex-1 basis-full flex-col p-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
           
              {/* image */}
              <div className="relative overflow-hidden flex  items-end justify-center w-full rounded-lg mt-4 bg-gradient-to-br from-berry-200 via-purple-500 to-blue-500" >
                  
                  <div className={`rotate-6 rounded-lg relative overflow-hidden top-6`} >
                   
                   <img src={project.img} 
                       alt={project.title}
                       className={`object-cover ${project.id === 4 ? "object-top" : " "}   w-64 h-40`}/>
                  
                  </div>
             
               </div>
             
              <div className='mt-4 text-start '>
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
