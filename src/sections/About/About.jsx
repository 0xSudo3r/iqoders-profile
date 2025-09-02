import { motion } from "framer-motion";
import { FaUsers, FaTasks, FaClock, FaSmile } from "react-icons/fa";
import { useEffect, useState } from "react";

function Counter({ target, duration }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target.replace(/\D/g, ""), 10); // remove +, % etc.
    const incrementTime = (duration * 1000) / end;

    const timer = setInterval(() => {
      start += 1;
      if (start >= end) {
        clearInterval(timer);
        setCount(target); // show final with + or %
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}</span>;
}

function About() {
  return (
    <section
      id="about"
      className="relative py-20 text-white bg-[#1E1830] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            About <span className="text-[#5227FF]">IQoders</span>
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            We are a team of passionate developers and technology experts
            dedicated to transforming businesses through innovative IT
            solutions.
          </p>
        </motion.div>

        {/* Empowering Businesses */}
        <motion.div
          className="mt-12 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
            Empowering Businesses Through Technology
          </h3>
          <p className="text-gray-300">
            At IQoders, we believe that technology should be an enabler, not a
            barrier. Our mission is to bridge the gap between complex technical
            solutions and real business needs, delivering systems that are not
            just powerful, but also intuitive and scalable.
          </p>
        </motion.div>
 
        {/* Stats with Counter Animation */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {[
            {
              icon: <FaUsers className="text-3xl text-[#5227FF]" />,
              value: "50+",
              label: "Clients Served",
            },
            {
              icon: <FaTasks className="text-3xl text-[#5227FF]" />,
              value: "100+",
              label: "Projects Delivered",
            },
            {
              icon: <FaClock className="text-3xl text-[#5227FF]" />,
              value: "5+",
              label: "Years Experience",
            },
            {
              icon: <FaSmile className="text-3xl text-[#5227FF]" />,
              value: "98%",
              label: "Client Satisfaction",
            },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              {stat.icon}
              <h4 className="mt-2 text-2xl font-bold">
                <Counter target={stat.value} duration={2} />
              </h4>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Vision with Gradient Background */}
        <motion.div
          className="mt-20 max-w-4xl mx-auto text-center bg-gradient-to-r from-[#5227FF] via-[#7C4DFF] to-[#5227FF] p-10 rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-md">
            Our Vision
          </h3>
          <p className="mt-4 text-lg text-white opacity-90 leading-relaxed">
            To be the leading technology partner that enables businesses to
            thrive in the digital age by providing innovative, reliable, and
            scalable IT solutions that drive measurable results and sustainable
            growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
