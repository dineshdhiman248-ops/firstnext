 

function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-[#0b1120] py-20 text-white">
      
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-yellow-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-12">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          <div className="relative">
            <img
  src="/images/about.png"
  alt="About Us"
  className="w-full  h-[500px] rounded-3xl border border-white/10 shadow-2xl"
/>

            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-4 shadow-xl">
              <h3 className="text-3xl font-bold">10+</h3>
              <p className="text-sm font-medium">Years Experience</p>
            </div>
          </div>

          <div>

            <span className="mb-4 inline-block rounded-full bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-400">
              ABOUT OUR COMPANY
            </span>

            <h2 className="mb-6 text-4xl font-bold leading-tight lg:text-5xl">
              Building Modern Digital Experiences For Future Brands
            </h2>

            <p className="mb-6 text-lg leading-8 text-gray-300">
              We help startups and businesses create modern, scalable and
              user-friendly digital products with powerful technologies and
              premium UI/UX experiences.
            </p>

            <div className="grid gap-5 sm:grid-cols-2">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <h4 className="mb-2 text-xl font-semibold text-yellow-400">
                  Our Mission
                </h4>

                <p className="text-gray-300">
                  Deliver innovative and impactful solutions for businesses
                  worldwide.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <h4 className="mb-2 text-xl font-semibold text-yellow-400">
                  Our Vision
                </h4>

                <p className="text-gray-300">
                  Become a leading digital transformation company with global
                  impact.
                </p>
              </div>

            </div>

            <button className="mt-8 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-4 font-semibold text-black transition hover:scale-105">
              Learn More
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
export default AboutUs;