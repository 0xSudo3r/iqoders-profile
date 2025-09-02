import DotGrid from './components/DotGrid/DotGrid';

function Hero() {
  return (
    <section className="hero-section relative h-[100vh] flex items-center justify-center text-center">
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
      <div className="hero-text max-w-4xl px-6 z-2">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
          Technology moves <span className="text-[#5227FF]">business</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl text-gray-300">
          iQoders helps you stay ahead with smart IT systems that are quick, safe,
          and easy to grow. Whether you move to the cloud, update old systems,
          or add more security, we give you the tools and support to keep moving
          forward with confidence.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#get-started"
            className="px-6 py-3 bg-[#5227FF] text-white rounded-xl shadow-lg hover:bg-[#3B1FCC] transition"
          >
            Start Your Project
          </a>
          <a
            href="#learn-more"
            className="px-6 py-3 border border-gray-400 text-white rounded-xl hover:bg-gray-200 hover:text-black transition"
          >
            Learn More
          </a>
        </div>

        {/* Features Row */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
          <div>
            <h3 className="text-xl font-semibold text-white">Smart Solutions</h3>
            <p className="mt-2 text-sm">
              AI-powered systems that adapt to your business needs.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Lightning Fast</h3>
            <p className="mt-2 text-sm">
              Optimized performance for maximum efficiency.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Secure & Safe</h3>
            <p className="mt-2 text-sm">
              Enterprise-grade security for peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
