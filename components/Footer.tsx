const Footer = () => {
  return (
    <footer className="container w-full mx-auto">
      <div className="max-w-7xl mx-auto py-4 ">
        <div className="flex justify-between items-center text-sm text-neutral-600 dark:text-neutral-400">
          <div>
            © {new Date().getFullYear()} Lukas Corbitt
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://github.com/lcorbitt" 
              className="hover:text-neutral-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/lukas-corbitt/" 
              className="hover:text-neutral-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;