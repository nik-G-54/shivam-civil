import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Water Infrastructure / Pipeline',
    location: '',
    details: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Enquiry: ${formData.service}`;
    const body = `Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0ALocation: ${formData.location}%0D%0AService: ${formData.service}%0D%0ADetails: ${formData.details}`;
    window.location.href = `mailto:sonamsales111@gmail.com?subject=${subject}&body=${body}`;
  };

  const services = [
    "Water Infrastructure / Pipeline",
    "Civil Construction",
    "Overhead Tank / Reservoir",
    "Government Infrastructure",
    "Tubewell / Borewell",
    "Jal Jeevan Mission",
    "Something else"
  ];

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="contact" className="py-[100px] max-md:py-16">
      <div className="max-w-[1180px] mx-auto px-7">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={variants}
          className="grid grid-cols-2 gap-10 items-end mb-[54px] max-md:grid-cols-1"
        >
          <div>
            <h2 className="font-heading font-extrabold text-[clamp(2rem,2.4vw+1rem,2.7rem)] m-0">
              Get in touch
            </h2>
          </div>
          <p className="text-ink-soft max-w-[44ch] m-0">
            Call for urgent work, or send an enquiry with your project details — we'll get back with a site-visit date.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-14 max-md:grid-cols-1">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={variants}
          >
            <div className="mb-[26px]">
              <h3 className="text-lg font-bold mb-1">Phone</h3>
              <a href="tel:+919889556111" className="text-rust font-semibold no-underline hover:underline">+91 98895 56111</a>
            </div>
            
            <div className="mb-[26px]">
              <h3 className="text-lg font-bold mb-1">Email</h3>
              <a href="mailto:sonamsales111@gmail.com" className="text-rust font-semibold no-underline hover:underline">sonamsales111@gmail.com</a>
            </div>

            <div className="mb-[26px]">
              <h3 className="text-lg font-bold mb-1">WhatsApp</h3>
              <a href="https://wa.me/919889556111" target="_blank" rel="noopener noreferrer" className="text-rust font-semibold no-underline hover:underline">Message us on WhatsApp</a>
            </div>

            <div className="mb-[26px]">
              <h3 className="text-lg font-bold mb-1">Office</h3>
              <p className="m-0 mb-2">Chand Ganj Garden, Kapoorthala, Lucknow, Uttar Pradesh</p>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.347525389656!2d80.93345864190884!3d26.884841907765187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957d1a7ef6cb3%3A0x6b63cc50d87cc8e7!2sKapoorthla%2C%20Chandralok%2C%20Lucknow%2C%20Uttar%20Pradesh%20226024!5e0!3m2!1sen!2sin!4v1709664531123!5m2!1sen!2sin" 
                title="Office Location"
                className="w-full h-[230px] border border-line mt-2.5 filter grayscale-[0.25] contrast-[1.05]" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-[15px]">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-[0.8rem] font-semibold text-ink-soft">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                  className="font-body text-base p-[12px_14px] border border-line bg-paper-3 text-ink focus:outline-2 focus:outline-water focus:outline-offset-1" 
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-[0.8rem] font-semibold text-ink-soft">Phone *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                  className="font-body text-base p-[12px_14px] border border-line bg-paper-3 text-ink focus:outline-2 focus:outline-water focus:outline-offset-1" 
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="service" className="text-[0.8rem] font-semibold text-ink-soft">Service Needed</label>
                <select 
                  id="service" 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="font-body text-base p-[12px_14px] border border-line bg-paper-3 text-ink focus:outline-2 focus:outline-water focus:outline-offset-1"
                >
                  {services.map((srv, idx) => (
                    <option key={idx} value={srv}>{srv}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="location" className="text-[0.8rem] font-semibold text-ink-soft">Project Location</label>
                <input 
                  type="text" 
                  id="location" 
                  name="location" 
                  placeholder="e.g. Aliganj, Lucknow"
                  value={formData.location}
                  onChange={handleChange}
                  className="font-body text-base p-[12px_14px] border border-line bg-paper-3 text-ink focus:outline-2 focus:outline-water focus:outline-offset-1" 
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="details" className="text-[0.8rem] font-semibold text-ink-soft">Project Details</label>
                <textarea 
                  id="details" 
                  name="details" 
                  rows="4"
                  value={formData.details}
                  onChange={handleChange}
                  className="font-body text-base p-[12px_14px] border border-line bg-paper-3 text-ink focus:outline-2 focus:outline-water focus:outline-offset-1 resize-y" 
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="bg-rust border border-rust text-paper-3 py-[15px] px-6 font-semibold w-full text-center hover:bg-rust-dark cursor-pointer mt-2 transition-colors"
              >
                Send Enquiry
              </button>
              <p className="text-[0.8rem] text-ink-soft -mt-1 text-center">
                We typically respond within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
