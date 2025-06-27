"use client";

import Link from "next/link";

const ContactBanner = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* CTA Text */}
        <div className="text-3xl font-semibold text-dark text-center md:text-left">
          Ready to start your next project? Let's work together!
        </div>
        {/* Button */}
        <Link href="/contact">
          <button className="px-8 py-4 bg-brand text-white text-lg font-bold rounded-lg shadow-md hover:bg-accent transition">
            Contact Me
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ContactBanner;
