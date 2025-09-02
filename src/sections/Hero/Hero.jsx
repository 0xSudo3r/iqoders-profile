import DotGrid from "./components/DotGrid/DotGrid";
import { FaBrain, FaBolt, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";
function Hero() {
  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center text-center px-4 mb-5 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="hero-background absolute inset-0">
        <DotGrid
          dotSize={5}
          gap={30}
          baseColor="#271E37"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Text Content */}
      <motion.div
        className="hero-text max-w-5xl mt-7 w-full z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Main Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Technology moves <span className="text-[rgb(82,39,255)]">business</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          iQoders helps you stay ahead with smart IT systems that are quick,
          safe, and easy to grow. Whether you move to the cloud, update old
          systems, or add more security, we give you the tools and support to
          keep moving forward with confidence.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-4"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.a
            href="#contact"
            className="px-6 py-3 bg-[#5227FF] text-white rounded-xl shadow-lg hover:bg-[#3b1ecc] transition text-sm sm:text-base"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            Start Your Project
          </motion.a>
          <motion.a
            href="#services"
            className="px-6 py-3 border border-gray-400 text-white rounded-xl hover:bg-gray-200 hover:text-black transition text-sm sm:text-base"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Features Row */}
        <motion.div
          className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-gray-300 justify-items-center"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {[
            {
              icon: <FaBrain className="text-4xl text-[#5227FF] mb-3" />,
              title: "Smart Solutions",
              desc: "AI-powered systems that adapt to your business needs.",
            },
            {
              icon: <FaBolt className="text-4xl text-[#5227FF] mb-3" />,
              title: "Lightning Fast",
              desc: "Optimized performance for maximum efficiency.",
            },
            {
              icon: <FaShieldAlt className="text-4xl text-[#5227FF] mb-3" />,
              title: "Secure & Safe",
              desc: "Enterprise-grade security for peace of mind.",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              {feature.icon}
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
