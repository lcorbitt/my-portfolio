import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            LC<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-x-8">
          <Nav />

          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;