'use client'

import { useRef, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from '@emailjs/browser';
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';

const isDevelopment = process.env.NODE_ENV === 'development';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const captchaRef = useRef<ReCAPTCHA>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string | null;
  }>({ type: null, message: null });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: null });

    if (!formRef.current) {
      setSubmitStatus({
        type: 'error',
        message: 'Form reference not found'
      });
      return;
    }

    try {
      setIsSubmitting(true);

      // Validate environment variables
      if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
          !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
          !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
        throw new Error('EmailJS configuration is missing');
      }
      
      let captchaToken = null;
      
      // Only verify reCAPTCHA in production
      if (!isDevelopment) {
        captchaToken = await captchaRef.current?.executeAsync();
        if (!captchaToken) {
          throw new Error('Please verify you are not a robot');
        }
      }

      // Get form data
      const formData = new FormData(formRef.current);
      
      // Create template parameters
      const templateParams = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        service: formData.get('service'),
        message: formData.get('message'),
        ...(captchaToken && { 'g-recaptcha-response': captchaToken })
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.'
        });
        formRef.current.reset();
        if (!isDevelopment) {
          captchaRef.current?.reset();
        }
      } else {
        throw new Error('Failed to send message');
      }

    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen py-12 xl:py-24 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* form side */}
          <div className="flex flex-col w-full xl:w-1/2 bg-[#27272c] p-12 rounded-xl">
            <h2 className="text-4xl mb-8 text-accent">Let&apos;s work together</h2>
            <p className="text-gray-400 mb-12">
              Have a project in mind? Let&apos;s discuss how we can work together to bring your ideas to life.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-y-8">
              <input 
                type="text" 
                name="name"
                placeholder="Name" 
                required
                className="w-full bg-[#1c1c21] h-[52px] rounded-lg px-4 outline-none focus:ring-1 focus:ring-accent"
              />
              <input 
                type="email" 
                name="email"
                placeholder="Email address" 
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                className="w-full bg-[#1c1c21] h-[52px] rounded-lg px-4 outline-none focus:ring-1 focus:ring-accent"
              />
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone number (555-555-5555)" 
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                title="Please enter a valid phone number (10 digits)"
                className="w-full bg-[#1c1c21] h-[52px] rounded-lg px-4 outline-none focus:ring-1 focus:ring-accent"
              />
              <select 
                name="service"
                required
                className="w-full bg-[#1c1c21] h-[52px] rounded-lg px-4 outline-none focus:ring-1 focus:ring-accent appearance-none cursor-pointer"
              >
                <option value="">Select a service</option>
                <option value="web">Web Development</option>
                <option value="app">App Development</option>
                <option value="design">UI/UX Design</option>
              </select>

              <textarea 
                name="message"
                placeholder="Type your message here"
                required
                className="w-full bg-[#1c1c21] h-[180px] rounded-lg p-4 outline-none focus:ring-1 focus:ring-accent resize-none"
              ></textarea>

              {!isDevelopment && process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
                <ReCAPTCHA
                  ref={captchaRef}
                  size="invisible"
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                />
              )}

              {submitStatus.message && (
                <p className={`text-sm ${
                  submitStatus.type === 'success' ? 'text-green-500' : 'text-red-500'
                }`}>
                  {submitStatus.message}
                </p>
              )}

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-fit bg-accent hover:bg-accent/90 text-black font-medium rounded-full py-3 px-8 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send message'}
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
