'use client'

import { 
  FaAws,
  FaBootstrap,
  FaCss3,
  FaDatabase,
  FaDocker,
  FaFigma,
  FaGit,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaVuejs,
} from "react-icons/fa";

import {
  SiCypress,
  SiDatadog,
  SiExpress,
  SiJira,
  SiLinear,
  SiNestjs,
  SiNextdotjs,
  SiNotion,
  SiPostgresql,
  SiRedis,
  SiRubyonrails,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { TbTestPipe } from "react-icons/tb";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const about = {
  title: 'About me',
  description: "I’m Lukas — a senior full-stack engineer and dad living in Fort Collins, Colorado. Most recently I've been building aerospace software for Urban Sky and e-commerce & insurance products at Hodinkee, but my experience spans across multiple industries. Outside of code, you’ll find me chasing speed on my motorcycle, carving fresh snow, or traveling the world. I’m driven by a love for high-impact software and take pride in bridging technical execution with real business value.",
  items: [
    {
      label: 'Name',
      value: 'Lukas Corbitt',
    },
    {
      label: 'Experience',
      value: '7+ Years',
    },
    {
      label: 'Location',
      value: 'Fort Collins, CO',
    },
    {
      label: 'Languages',
      value: 'English',
    },
    {
      label: 'Freelance',
      value: 'Available',
    }
  ]
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'Experience',
  items: [
    {
      company: 'Urban Sky',
      industry: 'Aerospace',
      url: 'https://www.urbansky.com/',
      position: 'Full Stack Software Engineer',
      duration: 'May 2024 - Jan 2025',
      description: [
        'Developed and maintained scalable React applications for real-time mission management and data visualization using React, TypeScript, Node.js, NestJS, and, PostgreSQL.',
        'Created and optimized APIs to support multi-tenant data access and device communication.',
        'Implemented access control mechanisms, including authentication strategies and feature flag management.',
        'Wrote end-to-end tests using Playwright to ensure application stability.',
        'Collaborated with cross-functional teams to analyze and optimize application performance.'
      ],
    },
    {
      company: 'HODINKEE',
      industry: 'Media Publishing, Insurance, and E-Commerce',
      url: 'https://www.hodinkee.com/',
      position: 'Full Stack Software Engineer',
      duration: 'Jun 2021 - Nov 2023',
      description: [
        "Lead the technical effort for Hodinkee Insurance's jewelry expansion, driving planning and launch to deliver over $1M in coverage within the first month.",
        'Developed key platform features including client onboarding, fraud detection, and third-party API integrations using Ruby on Rails, PostgreSQL, and React.',
        'Improved critical components of the Editorial platform, improving search functionality, content management, and procurement workflows.',
        "Redesigned Hodinkee's e-commerce Shop and other user-facing platforms, translating prototypes into responsive, high-quality user experiences like the Recommended Products feature.",
        'Utilized DataDog for monitoring, RSpec for testing, and ConfigCat for feature flag management to ensure stability and controlled feature rollouts.',
      ],
    },
    {
      company: 'Spectora',
      industry: 'Real Estate',
      url: 'https://www.spectora.com/',
      position: 'Full Stack Software Engineer',
      duration: 'Oct 2020 - Jun 2021',
      description: [
        'Developed and maintained a web platform using Ruby on Rails, PostgreSQL, and Vue.js to improve home inspector efficiency and streamline homebuyer decision-making.',
        'Built CRM tools to enhance customer interactions and automate administrative tasks.',
        'Expanded integration and unit testing with RSpec and Cypress.js, improving application reliability and reducing bug reports.',
      ],
    },
    {
      company: 'Zestful',
      industry: 'Human Resources',
      url: 'https://www.linkedin.com/company/zestful/',
      position: 'Full Stack Software Engineer',
      duration: 'Mar 2020 - Oct 2020',
      description: [
        'Developed HR products through the software lifecycle, from gathering requirements to deployment, leveraging Ruby on Rails and PostgreSQL.',
        'Optimized application performance and scalability by addressing bottlenecks and implementing solutions to support growing user demands.',
        'Worked closely with design and product team members to discuss and refine feature requirements and iterations of the UI/UX.',
      ],
    },
    {
      company: 'Trace First',
      industry: 'Information Management Systems',
      url: 'https://www.tracefirst.com/',
      position: 'Rails Application Developer',
      duration: 'May 2019 - Mar 2020',
      description: [
        'Built and maintained a suite of integrated Ruby on Rails applications, providing custom solutions for the USDA.',
        'Wrote algorithms for data extraction and validation from complex legal certifications as part of an ETL pipeline.',
        'Created REST APIs to facilitate seamless communication between independent applications within the TraceFirst ecosystem',
      ],
    },
    {
      company: 'City of Fort Collins, I.T. Department',
      industry: 'Government',
      position: 'PC Hardware/Software Technician (Intern)',
      duration: 'Nov 2018 - May 2019',
      description: [
        'Installed, modified, and made repairs to personal computer hardware and software systems.',
        'Provided general user training to system users on operations systems, hardware and software.',
        "Answered client's inquiries in person and via telephone concerning systems operations; diagnoses system hardware, software, and operator problems."
      ],
    }
  ]
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'Education',
  items: [
    {
      institution: "Lee's Summit High School, Lee's Summit, MO",
      degree: 'Diploma',
      duration: '2007 - 2011',
    },
    {
      institution: "Missouri Valley College, Marshall, MO",
      degree: 'Bachelor of Arts in Mass Communications',
      duration: '2011 - 2015',
    }
  ],
  // coursework: {
  //   institutions: [
  //     'Missouri Valley College',
  //     'Metropolitan CC',
  //     'Front Range CC'
  //   ],
  //   duration: '2011-2015',
  //   description: 'Completed Coursework (Computer Science, Mass Communications, and General Studies)'
  // }
}

const skills = {
  icon: '/assets/resume/code.svg',
  title: 'Skills',
  categories: [
    {
      title: 'Front-End Development',
      skills: [
        { icon: <FaHtml5 size={24} />, name: 'HTML' },
        { icon: <FaCss3 size={24} />, name: 'CSS' },
        { icon: <FaJs size={24} />, name: 'JavaScript' },
        { icon: <SiTypescript size={24} />, name: 'TypeScript' },
        { icon: <FaReact size={24} />, name: 'React' },
        { icon: <SiNextdotjs size={24} />, name: 'Next.js' },
        { icon: <FaVuejs size={24} />, name: 'Vue.js' },
        { icon: <SiTailwindcss size={24} />, name: 'Tailwind CSS' },
        { icon: <FaBootstrap size={24} />, name: 'Bootstrap UI' },
        { icon: <FaFigma size={24} />, name: 'Figma' }
      ]
    },
    {
      title: 'Back-End Development',
      skills: [
        { icon: <FaNodeJs size={24} />, name: 'Node.js' },
        { icon: <SiNestjs size={24} />, name: 'NestJS' },
        { icon: <SiRubyonrails size={24} />, name: 'Ruby on Rails' },
        { icon: <SiPostgresql size={24} />, name: 'PostgreSQL' },
        { icon: <FaReact size={24} />, name: 'REST APIs' },
        { icon: <SiExpress size={24} />, name: 'Express' },
        { icon: <FaDatabase size={24} />, name: 'SQL' },
        { icon: <SiRedis size={24} />, name: 'Redis' }
      ]
    },
    {
      title: 'Miscellaneous',
      skills: [
        { icon: <FaGit size={24} />, name: 'Git' },
        { icon: <FaDocker size={24} />, name: 'Docker' },
        { icon: <FaAws size={24} />, name: 'AWS' },
        { icon: <SiDatadog size={24} />, name: 'DataDog' },
        { icon: <TbTestPipe size={24} />, name: 'Playwright' },
        { icon: <SiCypress size={24} />, name: 'Cypress' },
        { icon: <SiLinear size={24} />, name: 'Linear' },
        { icon: <SiJira size={24} />, name: 'Jira' },
        { icon: <SiNotion size={24} />, name: 'Notion' }
      ]
    }
  ]
}

const Resume = () => {
  return (
    <section className="flex flex-col justify-center items-center py-12 xl:py-0 mt-12">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1, 
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn"
            }
          }}
        >
          <Tabs
            defaultValue="about"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>
            
            <div className="min-h-[70vh] w-full">
              {/* about */}
              <TabsContent value="about" className="w-full">
                <div className="flex flex-col gap-8 bg-[#27272c] p-6 rounded-lg">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">{about.title}</h2>
                    <p className="text-gray-300">
                      {about.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                    {about.items.map((item, index) => (
                      <div key={index} className="flex gap-2">
                        <span className="text-gray-400 min-w-[100px]">{item.label}</span>
                        <span className="text-white">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* skills */}
              <TabsContent value="skills" className="w-full">
                <div className="flex flex-col gap-6">
                  {skills.categories.map((category, index) => (
                    <div key={index} className="flex flex-col gap-4 bg-[#27272c] p-6 rounded-lg">
                      <h2 className="text-2xl font-bold">{category.title}</h2>
                      <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-6">
                        <TooltipProvider>
                          {category.skills.map((skill, skillIndex) => (
                            <Tooltip key={skillIndex}>
                              <TooltipTrigger className="text-gray-300 hover:text-gray-100 transition-colors">
                                {skill.icon}
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          ))}
                        </TooltipProvider>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              {/* experience */}
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-6">
                  {experience.items.map((item, index) => (
                    <div key={index} className="bg-[#27272c] p-6 rounded-lg">
                      <div className="flex flex-col gap-2 mb-4">
                        <div className="flex gap-4">
                          <h3 className="text-xl font-semibold">{item.company}</h3>
                          <span className="text-gray-300 italic">({item.industry})</span>
                        </div>
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition-colors">
                          {item.url}
                        </a>
                        <div className="flex flex-col sm:flex-row sm:gap-8 text-white">
                          <span>{item.position}</span>
                          <span>|</span>
                          <span className="text-accent italic">{item.duration}</span>
                        </div>
                      </div>
                      <details className="mt-2 text-gray-300 cursor-pointer group">
                        <summary className="font-medium hover:text-gray-500 transition-colors flex items-center">
                          <span className="mr-4 transition-transform duration-200 group-open:rotate-90">▶</span>
                          Details
                        </summary>
                        <ul className="list-disc list-inside space-y-2 mt-2 ml-8">
                          {item.description.map((desc, descIndex) => (
                            <li key={descIndex} className="pl-2">{desc}</li>
                          ))}
                        </ul>
                      </details>
                    </div>
                  ))}
                </div>
              </TabsContent>

              {/* education */}
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-6">
                  {[...education.items].reverse().map((item, index) => (
                    <div key={index} className="flex flex-col gap-2 bg-[#27272c] p-6 rounded-lg">
                      <h3 className="text-xl font-semibold">{item.institution}</h3>
                      <span className="text-gray-300 italic">{item.degree}</span>
                      <span className="text-accent italic">{item.duration}</span>
                    </div>
                  ))}
                  
                  {/* <div className="flex flex-col gap-2 bg-[#27272c] p-6 rounded-lg">
                    <h3 className="text-xl font-semibold">{education.coursework.institutions.join(', ')}</h3>
                    <span className="text-gray-300 italic">{education.coursework.description}</span>
                    <span className="text-accent italic">{education.coursework.duration}</span>
                  </div> */}
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};
export default Resume;
