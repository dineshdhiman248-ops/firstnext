// Hero.tsx

"use client";

interface HeroProps {
  title: string;
  description: string;
  image: string;
  buttonText: string;
}
function Hero(bannerdata: HeroProps) {
  return (
    <section className="relative h-[300px] md:h-[400px] lg:h-[500px]">
      <div className="absolute inset-0">
        <img
          src={bannerdata.image}
          alt="hero"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-5">
          <div className="w-full md:w-1/2 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {bannerdata.title}
            </h1>
            <p className="mb-6 text-gray-200">
              {bannerdata.description}
            </p>
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-300 transition">
              {bannerdata.buttonText}
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}
export default Hero;