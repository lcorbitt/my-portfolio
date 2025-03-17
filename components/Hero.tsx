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
          <span className="text-xl">Software Engineer & Web Developer</span>

          <h1 className="h1 mb-6">
            Hello, I'm <br /> <span className="text-accent">Lukas Corbitt</span>
          </h1>

          <p className="max-w-[500px] mb-9 text-white/80">
            I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
          </p>

          <div className="flex flex-col xl:flex-row items-center gap-8">
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