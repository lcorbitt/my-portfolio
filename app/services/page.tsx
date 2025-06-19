"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { BsArrowDownRight } from "react-icons/bs"

const services = [
  {
    num: "01",
    title: "Software Development",
    description: "I build modern, responsive websites that are fast, secure, and easy to maintain.",
    href: "/services/software-development"
  },
  {
    num: "02",
    title: "Web Development",
    description: "I design modern, responsive websites that are fast, secure, and easy to maintain.",
    href: "/services/web-development"
  },
  {
    num: "03",
    title: "UI/UX Design",
    description: "I design modern, responsive websites that are fast, secure, and easy to maintain.",
    href: "/services/ui-ux-design"
  },
  {
    num: "04",
    title: "Logo Design",
    description: "I design modern, responsive websites that are fast, secure, and easy to maintain.",
    href: "/services/logo-design"
  }
]

const Services = () => {
  return (
    <section className="flex flex-col justify-center items-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5, duration: 0.5, ease: "easeIn" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div key={index} className="flex flex-1 flex-col justify-center gap-6 group">
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
    </section>
  );
};

export default Services;
