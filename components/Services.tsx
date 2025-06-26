"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { BsArrowDownRight } from "react-icons/bs"

const services = [
  {
    num: "01",
    title: "Software/App Development",
    description: "I design and build scalable, efficient applications that solve real-world problems. Whether it's a full-stack web app, internal tooling, or backend APIs, I bring technical expertise and business insight to support your long-term goals.",
    href: "/services/software-development"
  },
  {
    num: "02",
    title: "Web Development",
    description: "I build custom web experiences that align with your brand, communicate clearly, and guide users with intention. Whether it's a portfolio, marketing site, or business landing page, I prioritize structure, content clarity, and elegant design built for the modern web.",
    href: "/services/web-development"
  },
  {
    num: "03",
    title: "QA & Testing",
    description: "I provide QA services that safeguard your reputation and bottom line by identifying defects early, reducing costly fixes, and delivering reliable software that meets user expectations so you maintain a competitive edge and drive long-term growth.",
    href: "/services/ui-ux-design"
  },
  {
    num: "04",
    title: "Technical Consulting",
    description: "Request technical consulting services to help your business and organizations to improve your technical infrastructure and processes.",
    href: "/services/technical-consulting"
  }
]

const Services = () => {
  return (
    <section className="min-h-[calc(100vh-180px)]">
      <h2 className="text-5xl text-center text-brand mb-24 font-extrabold text-gradient">Services</h2>
      <div className="flex items-center justify-center h-full">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.2, duration: 0.4, ease: "easeIn" }}
            className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-[60px] items-stretch"
          >
            {services.map((service, index) => (
              <div key={index} className="flex flex-col h-full justify-between gap-6 group bg-transparent">
                <div className="w-full flex items-center gap-4 justify-between">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex items-center justify-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>

                <h2 className="text-2xl font-bold">{service.title}</h2>
                <p className="text-white/60">{service.description}</p>

                <div className="border-b border-white/20 w-full"></div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
