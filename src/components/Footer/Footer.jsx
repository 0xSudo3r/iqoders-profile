import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0a0701] text-[#f4f4f9] pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">Killswitch</h2>
            <p className="mt-4 text-[#f4f4f9]/80 text-sm leading-relaxed">
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
                <a href="#" className="hover:text-[#ff5061] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#ff5061] transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#ff5061] transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#ff5061] transition">
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
                <a href="#services" className="hover:text-[#ff5061] transition">
                  Cloud Migration
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#ff5061] transition">
                  Cybersecurity
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#ff5061] transition">
                  Mobile Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#ff5061] transition">
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
            <p className="text-[#f4f4f9]/80 text-sm">hello@killswitch.com</p>
            <p className="text-[#f4f4f9]/80 text-sm mt-1">+1 (555) 123-4567</p>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0a0701] hover:bg-[#ff5061] transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0a0701] hover:bg-[#ff5061] transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0a0701] hover:bg-[#ff5061] transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0a0701] hover:bg-[#ff5061] transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#f4f4f9]/20 mt-12 pt-6 text-center text-[#f4f4f9]/60 text-sm">
          © {new Date().getFullYear()} Killswitch. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;