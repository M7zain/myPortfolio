'use client'
import React from 'react'
import { Spotlight } from '../ui/Spotlight'
import { profile } from '../../app/assets'
import { FlipWords } from '../ui/flip-words'
import { TextGenerateEffect } from '../ui/text-generate-effect'

const Hero = () => {
  const word = ["programmer", "Computer-Engineer", "Designer", "Front-end-developer"]
  const phrase = "Transforming Concepts into Seamless"

  return (
    <div className='pb-20 md:pt-32'>
      {/* Light beams */}
      <Spotlight className='-top-40 -left-10 md:-left-32 md:top-48 h-screen' fill='#00B4D8' />
      <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='white' />
      <Spotlight className='top-20 left-80 h-[80vh] w-[50vw]' fill='#0077B6' />

      {/* Grid background */}
      <div className="h-[50rem] w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]" />

        {/* Hero */}
        <div className='flex flex-col items-center justify-center'>
          <div className='text-center mb-0 md:mb-28'>
            <p className='text-sm sm:text-xs md:text-lg font-semibold'>DYNAMIC WEB MAGIC WITH NEXT.JS</p>
          </div>

          {/* Text and image */}
          <div className='relative flex flex-col md:flex-row items-center md:items-start pl-0 md:pl-32 md:space-x-10'>
            {/* Hero image */}
            <div className="relative w-80 h-80 hidden mr-10 md:block">
              {/* Circle */}
              <div className="absolute inset-0 w-64 h-64 rounded-full bg-white blur-2xl z-10 left-5 top-10"></div>
              {/* Image */}
              <img src={profile.src} alt="me" className="absolute w-96 z-20 -top-32" />
              {/* Square */}
              <div className="absolute w-96 h-24 inset-0 bg-berry-300 blur-lg z-30 top-64 -left-8"></div>
            </div>
            {/* End of hero image */}

            {/* Hero text */}
            <div className='flex flex-col items-center md:items-start'>
              <h1 className='text-4xl md:text-6xl text-center md:text-left font-bold leading-0 md:max-w-[500px]'>
                <TextGenerateEffect words={phrase} /> <span className='font-bold text-berry'>Real World Projects </span>
              </h1>

              <div className='flex flex-col md:flex-row items-center text-center mt-10'>
                <p className='mb-2 md:mb-0'>
                  Hi! I'm Zain, I'm a
                </p>
                <div >
                  <FlipWords words={word} />
                </div>
              </div>

            </div>
            {/* End of hero text */}
          </div>
          {/* End of text and image */}

          <a href="#projects" className="mt-10 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Show My Work
          </a>
        </div>
      </div>
      {/* End of Grid */}
    </div>
  )
}

export default Hero
