"use client"

import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
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
    title: "Technical Consulting",
    description: "I provide technical consulting services to help businesses and organizations improve their technical infrastructure and processes.",
    href: "/services/technical-consulting"
  }
]

const Home = () => {
  return (
    <section className="h-full">
      <Hero />
      <Stats />
      <div className="border-t border-white/20 container pb-24"></div>
      <Services />
    </section>
  );
};

export default Home;