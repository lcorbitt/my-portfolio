'use client'

import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'
import Socials from '@/components/ui/Socials'
import Photo from '@/components/Photo'

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/lukas_corbitt_resume.pdf';
    link.download = 'lukas_corbitt_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <h1 className="h1 mb-6">
            Lukas<br /> <span className="text-accent"> Corbitt</span>
          </h1>

          <span className="text-xl">Full Stack Software Engineer & <br /> Web Developer</span>

          {/* <p className="max-w-[500px] mb-9 text-white/80">
            I’m Lukas — a senior full-stack engineer and dad living in Fort Collins, Colorado. Most recently I've been building aerospace software for <a href="https://www.urbansky.com/" target="_blank" rel="noopener noreferrer">Urban Sky</a> and e-commerce & insurance products at <a href="https://www.hodinkee.com/" target="_blank" rel="noopener noreferrer">Hodinkee</a>.<br></br><br></br>Outside of code, you’ll find me on my motorcycle, snowboarding, or traveling the world. I’m driven by a love for high-impact software and take pride in bridging technical execution with real business value.
          </p> */}

          <div className="flex flex-col xl:flex-row items-center gap-8 mt-8">
            <Button variant="outline" size="lg" className="uppercase flex items-center gap-2" onClick={handleDownload}>
              <span className="font-semibold">Download Resume</span>
              <FiDownload />
            </Button>
            <div className="mb-8 xl:mb-0">
              <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
            </div>
          </div>
        </div>
        <div className="order-1 xl:order-none mb-8 xl-mb-0">
          <Photo />
        </div>
      </div>
    </div>
  )
}

export default Hero