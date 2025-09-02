import Hero from "./sections/Hero/Hero";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./sections/About/About";
import Services from "./sections/Services/Services";
import Contact from "./sections/Contact/Contact";

function App() {
  return (
    <div className="min-h-screen">
      <title>IQoders Tech</title>
      {/* Main Container */}
      <div className="mx-auto">
        <Navbar />
        <main className="pt-20 md:pt-5">
          <Hero />
          <About />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
