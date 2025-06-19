'use client'

import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="min-h-screen py-12 xl:py-24 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* form side */}
          <div className="flex flex-col w-full xl:w-1/2 bg-[#27272c] p-12 rounded-xl">
            <h2 className="text-4xl mb-8 text-accent">Let's work together</h2>
            <p className="text-gray-400 mb-12">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br />
              Eum nihil sapiente pariatur id totam.
            </p>

            <form className="flex flex-col gap-y-8">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-[#1c1c21] h-[52px] rounded-lg px-4 outline-none focus:ring-1 focus:ring-accent"
              />
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-[#1c1c21] h-[52px] rounded-lg px-4 outline-none focus:ring-1 focus:ring-accent"
              />
              <input 
                type="tel" 
                placeholder="Phone number" 
                className="w-full bg-[#1c1c21] h-[52px] rounded-lg px-4 outline-none focus:ring-1 focus:ring-accent"
              />
              <select 
                className="w-full bg-[#1c1c21] h-[52px] rounded-lg px-4 outline-none focus:ring-1 focus:ring-accent appearance-none cursor-pointer"
              >
                <option value="">Select a service</option>
                <option value="web">Web Development</option>
                <option value="app">App Development</option>
                <option value="design">UI/UX Design</option>
              </select>

              <textarea 
                placeholder="Type your message here."
                className="w-full bg-[#1c1c21] h-[180px] rounded-lg p-4 outline-none focus:ring-1 focus:ring-accent resize-none"
              ></textarea>

              <button 
                type="submit"
                className="w-fit bg-accent hover:bg-accent/90 text-black font-medium rounded-full py-3 px-8 transition-colors"
              >
                Send message
              </button>
            </form>
          </div>

          {/* info side */}
          <div className="flex flex-col w-full xl:w-1/2 xl:pl-12 mt-12 xl:mt-0">
            <div className="flex flex-col gap-y-12">
              <div className="flex items-center gap-x-4">
                <div className="bg-[#1c1c21] w-[52px] h-[52px] rounded-lg flex items-center justify-center text-accent">
                  <FaPhone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Phone</h3>
                  <p className="text-gray-300">(816) 714-4107</p>
                </div>
              </div>

              <div className="flex items-center gap-x-4">
                <div className="bg-[#1c1c21] w-[52px] h-[52px] rounded-lg flex items-center justify-center text-accent">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Email</h3>
                  <p className="text-gray-300">movalley5@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-x-4">
                <div className="bg-[#1c1c21] w-[52px] h-[52px] rounded-lg flex items-center justify-center text-accent">
                  <FaMapMarker size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Based in</h3>
                  <p className="text-gray-300">Fort Collins, CO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
