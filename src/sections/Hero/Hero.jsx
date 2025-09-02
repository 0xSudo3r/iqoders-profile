import RotatingText from './components/RotatingText/RotatingText'

import DarkVeil from './components/DarkVeil/DarkVeil';

function Hero(){

    return(
        <>
        <section className="hero-section h-[100vh]">
            <div className='hero-background h-[100%]'>
                <DarkVeil />
            </div>
            <div className="hero-text absolute bottom-20 m-20 mb-0">
                <div className='hero-headline flex m-4'>
                <h1 className="text-6xl text-gray-300 pr-2 font-bold">
                    We
                </h1>
                <RotatingText
                    texts={['Connect.', 'Secure.', 'Grow.']}
                    mainClassName="items-center justify-center rounded-lg overflow-hidden bg-indigo-600 text-white font-bold text-5xl p-2"
                    staggerFrom={"last"}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-120%" , opacity: 0 }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={3000}
                />
                </div>
                <div className='hero-subheadline m-4'>
                    <p className='text-lg text-gray-300 max-w-2xl'>
                        “Technology moves business, and iQoders helps you stay ahead. We build smart IT systems that are quick, safe, and easy to grow. Whether you move to the cloud, update old systems, or add more security, we give you the tools and support to keep moving forward with confidence.”
                    </p>
                </div>
                <div className='hero-buttons m-4 mt-6 flex gap-4'>
                    <a href="#get-started" class="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">
                    Get Started
                    </a>
                    <a href="#learn-more" class="px-6 py-3 border border-gray-300 text-white rounded-xl hover:bg-gray-300 hover:text-black transition">
                    Learn More
                    </a>
                </div>
            </div>
        </section>
        </>
    );
}

export default Hero;