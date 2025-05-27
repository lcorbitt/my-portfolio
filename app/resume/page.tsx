'use client'

// import { 
//   FaCss3,
//   FaFilePdf,
//   FaFigma,
//   FaHtml5,
//   FaJs,
//   FaNodeJs,
//   FaReact,
// } from "react-icons/fa";

// import {
//   SiNextdotjs,
//   SiTailwindcss,
// } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";

// import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";
// const about = [
//   {
//     title: 'About Me',
//     description: "I'm a full stack software engineer with a passion for building web applications. I'm currently working as a software engineer at Google. I'm also a member of the Google Developer Student Club at my university. I'm also a member of the Google Developer Student Club at my university.",
//     info: [
//       {
//         fieldName: 'Name',
//         fieldValue: 'Lukas Corbitt',
//       },
//       {
//         fieldName: 'Phone',
//         fieldValue: '(816) 714-4107',
//       },
//       {
//         fieldName: 'Email',
//         fieldValue: 'movalley5@gmail.com',
//       },
//       {
//         fieldName: 'Experience',
//         fieldValue: '7+ years',
//       },
//       {
//         fieldName: 'Location',
//         fieldValue: 'Fort Collins, CO',
//       },
//       {
//         fieldName: 'Languages',
//         fieldValue: 'English',
//       },
//     ]
//   },
  
// ]

// const experience = [
//   {
//     icon: '/assets/resume/badge.svg',
//     title: 'My experience',
//     description: 'I am a software engineer at Google. I am also a member of the Google Developer Student Club at my university. I am also a member of the Google Developer Student Club at my university.',
//     items: [
//       {
//         company: 'Urban Sky',
//         industry: 'Aerospace',
//         position: 'Full Stack Software Engineer',
//         duration: '2024 - 2025',
//         description: 'I am a software engineer at Google. I am also a member of the Google Developer Student Club at my university. I am also a member of the Google Developer Student Club at my university.',
//       },
//       {
//         company: 'HODINKEE',
//         industry: 'Fintech and E-Commerce',
//         position: 'Full Stack Software Engineer',
//         duration: '2021 - 2023',
//         description: 'I am a software engineer at Google. I am also a member of the Google Developer Student Club at my university. I am also a member of the Google Developer Student Club at my university.',
//       },
//       {
//         company: 'Spectora',
//         industry: 'Real Estate',
//         position: 'Full Stack Software Engineer',
//         duration: '2020 - 2021',
//         description: 'I am a software engineer at Google. I am also a member of the Google Developer Student Club at my university. I am also a member of the Google Developer Student Club at my university.',
//       },
//       {
//         company: 'Zestful',
//         industry: 'Human Resources',
//         position: 'Full Stack Software Engineer',
//         duration: '2020 - 2021',
//         description: 'I am a software engineer at Google. I am also a member of the Google Developer Student Club at my university. I am also a member of the Google Developer Student Club at my university.',
//       },
//       {
//         company: 'Trace First',
//         industry: 'Animal Health Data Management',
//         position: 'Full Stack Software Engineer',
//         duration: '2019 - 2020',
//         description: 'I am a software engineer at Google. I am also a member of the Google Developer Student Club at my university. I am also a member of the Google Developer Student Club at my university.',
//       },
//       {
//         company: 'City of Fort Collins, I.T. Department',
//         industry: 'Government',
//         position: 'Full Stack Software Engineer',
//         duration: '2018 - 2019',
//         description: 'I am a software engineer at Google. I am also a member of the Google Developer Student Club at my university. I am also a member of the Google Developer Student Club at my university.',
//       },

//     ]
//   },
// ]

// const education = [
//   {
//     icon: '/assets/resume/cap.svg',
//     title: 'My education',
//     description: 'I am a software engineer at Google. I am also a member of the Google Developer Student Club at my university. I am also a member of the Google Developer Student Club at my university.',
//     items: [
//       {
//         institution: "Lee's Summit High School",
//         degree: 'High School Diploma',
//         duration: '2007 - 2011',
//       },
//       {
//         institution: 'University of Colorado, Boulder',
//         degree: 'Bachelor of Science in Computer Science',
//         duration: '2011 - 2015',
//       },
//     ]
//   },
// ]

// const skills = [
//   {
//     icon: '/assets/resume/code.svg',
//     title: 'Skills',
//     description: 'I am a software engineer at Google. I am also a member of the Google Developer Student Club at my university. I am also a member of the Google Developer Student Club at my university.',
//     items: [
//       {
//         icon: <FaHtml5 />,
//         name: 'HTML',
//       },
//       {
//         icon: <FaCss3 />,
//         name: 'CSS',
//       },
//       {
//         icon: <FaJs />,
//         name: 'JavaScript',
//       },
//       {
//         icon: <FaReact />,
//         name: 'React',
//       },
//       {
//         icon: <FaNodeJs />,
//         name: 'Node.js',
//       },
//       {
//         icon: <SiNextdotjs />,
//         name: 'Next.js',
//       },
//       {
//         icon: <SiTailwindcss />,
//         name: 'Tailwind CSS',
//       },
//       {
//         icon: <FaFigma />,
//         name: 'Figma',
//       },
//     ]
//   },
// ]

const Resume = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center py-12 xl:py-0 mt-12">
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
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>
            
            <div className="min-h-[70vh] w-full">
              <TabsContent value="experience" className="w-full">
                experience
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};
export default Resume;
