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
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 mb-12 xl:mb-24">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <h1 className="h1 mb-6">
            Lukas<br /> <span className="text-gradient"> Corbitt</span>
          </h1>

          <span className="text-xl">Full Stack Software Engineer & <br /> Web Developer</span>

          <div className="flex flex-col xl:flex-row items-center gap-8 mt-8">
            <Button size="lg" className="uppercase flex items-center gap-2" onClick={handleDownload}>
              <span className="font-semibold text-white">Download Resume</span>
              <FiDownload color='white' />
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