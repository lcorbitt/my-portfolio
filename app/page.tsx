"use client"

import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import RevolvingText from "@/components/RevolvingText";
import ContactBanner from "@/components/ContactBanner";

const Home = () => {
  return (
    <section className="h-full">
      <Hero />
      <Stats />
      <div className="border-t border-white/20 container pb-24"></div>
      <Services />
      <RevolvingText />
      {/* <RecentBlogPosts /> */}
      <ContactBanner />
    </section>
  );
};

export default Home;