import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0E0C17] text-gray-300 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">IQoders</h2>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Transforming businesses with innovative IT solutions that are
              scalable, secure, and tailored to your needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#5227FF] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#5227FF] transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#5227FF] transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#5227FF] transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-[#5227FF] transition">
                  Cloud Migration
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#5227FF] transition">
                  Cybersecurity
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#5227FF] transition">
                  Mobile Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#5227FF] transition">
                  IT Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Get In Touch
            </h3>
            <p className="text-gray-400 text-sm">hello@iqoders.com</p>
            <p className="text-gray-400 text-sm mt-1">+1 (555) 123-4567</p>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1E1830] hover:bg-[#5227FF] transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1E1830] hover:bg-[#5227FF] transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1E1830] hover:bg-[#5227FF] transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1E1830] hover:bg-[#5227FF] transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} IQoders. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
