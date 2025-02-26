import { Button } from "@/components/ui/button";
import Photo from "@/components/Photo";
import Socials from "@/components/ui/Socials";
import { FiDownload } from "react-icons/fi";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "./services/page";

const Home = () => {
  return (
    <section className="h-full">
      <Hero />
      <Stats />
      <Services />
    </section>
  );
};

export default Home;