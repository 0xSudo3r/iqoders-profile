import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-[#14121F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Get <span className="text-[#5227FF]">In Touch</span>
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            Ready to transform your business with cutting-edge technology? Let's
            discuss your project and explore how we can help you achieve your
            goals.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <motion.div
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#5227FF]/20 text-[#5227FF]">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Email Us</h4>
                <p className="text-gray-400">Send us a message anytime</p>
                <p className="text-[#5227FF] mt-1">hello@iqoders.com</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#5227FF]/20 text-[#5227FF]">
                <FaPhone className="text-xl" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Call Us</h4>
                <p className="text-gray-400">Mon-Fri from 9am to 6pm</p>
                <p className="text-[#5227FF] mt-1">+1 (555) 123-4567</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#5227FF]/20 text-[#5227FF]">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Visit Us</h4>
                <p className="text-gray-400">Come say hello at our office</p>
                <p className="text-[#5227FF] mt-1">
                  123 Tech Street, Silicon Valley, CA 94000
                </p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.form
            className="bg-[#2A2340] rounded-2xl shadow-lg p-8 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-lg bg-[#1E1830] border border-gray-600 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5227FF]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg bg-[#1E1830] border border-gray-600 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5227FF]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Your Company"
                className="w-full rounded-lg bg-[#1E1830] border border-gray-600 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5227FF]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Project Details
              </label>
              <textarea
                rows="4"
                placeholder="Tell us about your project..."
                className="w-full rounded-lg bg-[#1E1830] border border-gray-600 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5227FF]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#5227FF] to-[#7C3AED] hover:opacity-90 transition"
            >
              Send Message <FaPaperPlane />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
