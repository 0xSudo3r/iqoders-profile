import { motion } from "framer-motion";
import {
  FaCloud,
  FaShieldAlt,
  FaRedo,
  FaMobileAlt,
  FaCogs,
  FaLightbulb,
} from "react-icons/fa";
import SpotlightCard from "./components/SpotlightCard/SpotlightCard";

function Services() {
  const services = [
    {
      icon: <FaCloud className="text-4xl text-[#ff5061]" />,
      title: "Cloud Migration",
      desc: "Seamlessly migrate your infrastructure to the cloud with minimal downtime and maximum efficiency.",
      points: [
        "AWS/Azure/GCP",
        "Zero Downtime",
        "Cost Optimization",
        "Scalability",
      ],
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#ff5061]" />,
      title: "Cybersecurity",
      desc: "Protect your business with comprehensive security solutions and threat monitoring.",
      points: [
        "Threat Detection",
        "Security Audits",
        "Compliance",
        "24/7 Monitoring",
      ],
    },
    {
      icon: <FaRedo className="text-4xl text-[#ff5061]" />,
      title: "Legacy Modernization",
      desc: "Transform outdated systems into modern, efficient, and maintainable solutions.",
      points: [
        "System Analysis",
        "Gradual Migration",
        "Data Integrity",
        "Performance Boost",
      ],
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#ff5061]" />,
      title: "Mobile Development",
      desc: "Create powerful mobile applications that deliver exceptional user experiences.",
      points: [
        "iOS & Android",
        "Cross-Platform",
        "UI/UX Design",
        "App Store Deploy",
      ],
    },
    {
      icon: <FaCogs className="text-4xl text-[#ff5061]" />,
      title: "DevOps & Automation",
      desc: "Streamline your development process with CI/CD pipelines and automation tools.",
      points: [
        "CI/CD Setup",
        "Infrastructure as Code",
        "Monitoring",
        "Deployment",
      ],
    },
    {
      icon: <FaLightbulb className="text-4xl text-[#ff5061]" />,
      title: "IT Consulting",
      desc: "Strategic technology consulting to align IT initiatives with business objectives.",
      points: [
        "Strategy Planning",
        "Technology Assessment",
        "Best Practices",
        "ROI Analysis",
      ],
    },
  ];

  return (
    <section id="services" className="relative py-20 bg-[#0a0701] text-white">
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
            Our <span className="text-[#ff5061]">Services</span>
          </h2>
          <p className="mt-6 text-lg text-[#f4f4f9]">
            Comprehensive IT solutions designed to accelerate your business
            growth and digital transformation journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="rounded-2xl transition transform duration-300 flex flex-col h-full"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <SpotlightCard
                className="custom-spotlight-card h-full min-h-[380px] flex flex-col justify-between p-8"
                spotlightColor="rgba(255, 80, 97, 0.6)"
              >
                <div>
                  <div className="flex items-center justify-center w-16 h-16 bg-[#0a0701] rounded-xl mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#f4f4f9]/80 text-sm mb-4">{service.desc}</p>
                </div>

                <ul className="space-y-2 text-sm text-[#f4f4f9]">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#ff5061] rounded-full"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;