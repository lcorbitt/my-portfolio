import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <h1>Hello World</h1>
        <Button>
          <FiDownload />
          Download
        </Button>
      </div>
    </section>
  );
};

export default Home;