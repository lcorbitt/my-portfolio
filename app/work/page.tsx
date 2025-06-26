'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: '01',
    title: 'Urban Sky',
    description: 'At Urban Sky, I played a key role on a small engineering team building mission-critical software used by NASA, the FAA, and the U.S. Military, featuring real-time mission data, secure access, and hardware device communication.',
    tech: ['React', 'TanstackQuery', 'Tailwind', 'Mantine', 'Node','NestJS', 'TypeORM', 'PostgreSQL', 'Docker', 'AWS', 'DataDog', 'Playwright'],
    image: '/work/urban_sky.png',
    githubUrl: 'https://github.com/lukascorr/portfolio',
    liveUrl: 'https://lukascorr.com'
  },
  {
    id: '02',
    title: 'Hodinkee',
    description: 'At Hodinkee, I played a key role in developing features and internal tools that enhanced the experience of shopping for and insuring luxury and pre-owned timepieces. As part of a lean engineering team, I worked closely with product, design, marketing, and insurance to streamline flows, support new offerings, and elevate the overall user experience.',
    tech: ['React', 'Tailwind', 'Ruby on Rails', 'PostgreSQL', 'Docker', 'AWS', 'DataDog', 'RSpec'],
    image: '/work/hodinkee.png',
    githubUrl: 'https://github.com/lukascorr/portfolio',
    liveUrl: 'https://hodinkee.com'
  },
  {
    id: '03',
    title: 'Superconductor Studios',
    description: 'Independently designed and developed the official website for Superconductor Studios., a custom home builder known for innovative, design-forward living spaces. Developed with React, Next.js, and TypeScript to highlight their portfolio through a sleek, high-performance interface.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Vercel'],
    image: '/work/superconductor_studios.png',
    githubUrl: 'https://github.com/lukascorr/portfolio',
    liveUrl: 'https://bitwerks.com'
  },
  {
    id: '04',
    title: 'BitWerks',
    description: 'Led the design and development of the official website for BitWerks, a bespoke software and web development studio I founded. Built with React, Next.js, and TypeScript to deliver a fast, modern, and scalable UX.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Vercel'],
    image: '/work/bitwerks.png',
    githubUrl: 'https://github.com/lukascorr/portfolio',
    liveUrl: 'https://bitwerks.com'
  },
  {
    id: '05',
    title: 'Spectora',
    description: 'At Spectora, I contributed to the development of tools that helped modernize the home inspection process for inspectors and their clients. Working cross-functionally with product, design, and customer support, I built and improved web and mobile features that streamlined scheduling, report writing, and client communication.',
    tech: ['Vue', 'AWS', 'Cypress', 'Docker', 'PostgreSQL'],
    image: '/work/spectora.png',
    githubUrl: 'https://github.com/lukascorr/portfolio',
    liveUrl: 'https://spectora.com'
  },
  {
    id: '06',
    title: 'Trace First',
    description: 'Worked alongside a lean engineering team at Trace First to build and maintain a suite of integrated Ruby on Rails applications for the USDA. Developed data validation logic, REST APIs, and supported ETL workflows that powered regulatory and certification processes.',
    tech: ['Vue', 'AWS', 'Cypress', 'Docker', 'PostgreSQL'],
    image: '/work/trace_first.png',
    githubUrl: 'https://github.com/lukascorr/portfolio',
    liveUrl: 'https://spectora.com'
  }
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(0);

  const handlePrevious = () => {
    setSlideDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setSlideDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentProject = projects[currentIndex];

  return (
    <section className="min-h-screen py-12 xl:py-24 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row">
          {/* left side */}
          <div className="flex flex-col w-full xl:w-1/2 z-10">
            <motion.h3 
              key={currentProject.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-[100px] xl:text-[150px] font-bold leading-none text-transparent [-webkit-text-stroke:1px_white]"
            >
              {currentProject.id}
            </motion.h3>
            <div className="mt-4 xl:mt-8 xl:pr-12">
              <motion.div
                key={currentProject.id + "-content"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  {currentProject.title}
                </h2>
                <p className="text-lg text-gray-400 mb-8 max-w-[400px]">
                  {currentProject.description}
                </p>
                <div className="text-accent font-mono text-sm mb-8 border-b border-gray-500 pb-8">
                  {currentProject.tech.join(', ')}
                </div>
                <div className="flex gap-x-6">
                  <Link 
                    href={currentProject.liveUrl} 
                    target="_blank"
                    className="bg-[#1c1c21] p-4 rounded-full text-gray-300 hover:text-white hover:bg-[#2a2a30] transition-colors"
                  >
                    <FaExternalLinkAlt size={24} />
                  </Link>
                  <Link 
                    href={currentProject.githubUrl} 
                    target="_blank"
                    className="bg-[#1c1c21] p-4 rounded-full text-gray-300 hover:text-white hover:bg-[#2a2a30] transition-colors"
                  >
                    <FaGithub size={24} />
                  </Link>
                  
                </div>
              </motion.div>
            </div>
          </div>

          {/* right side */}
          <div className="w-full xl:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id + "-image"}
                initial={{ 
                  opacity: 0,
                  x: slideDirection * 100
                }}
                animate={{ 
                  opacity: 1,
                  x: 0
                }}
                exit={{ 
                  opacity: 0,
                  x: -slideDirection * 100
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                className="bg-[#1c1c21] p-8 rounded-2xl"
              >
                <Image
                  src={currentProject.image}
                  width={1200}
                  height={1500}
                  alt={currentProject.title}
                  className="rounded-lg object-cover object-top h-96"
                  priority
                />
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-x-4 mt-6">
              <button 
                onClick={handlePrevious}
                className="bg-[#1c1c21] text-white/60 hover:text-white p-3 rounded-full transition-colors"
              >
                ←
              </button>
              <button 
                onClick={handleNext}
                className="bg-[#1c1c21] text-white/60 hover:text-white p-3 rounded-full transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
