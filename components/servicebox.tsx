"use client";
 

function ServiceBox() {
  return (
 <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-5">

    <div className="text-center mb-14">
      <span className="text-yellow-500 font-semibold uppercase tracking-widest">
        Our Services
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-3">
        What We Offer
      </h2>

      <p className="text-gray-500 max-w-2xl mx-auto mt-4">
        We build modern, scalable and high-performance websites
        using the latest technologies like Next.js, React and Tailwind CSS.
      </p>
    </div>

    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition duration-300 group">
        <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center mb-6 group-hover:scale-110 transition">
          🚀
        </div>

        <h3 className="text-2xl font-bold mb-3">
          Web Development
        </h3>

        <p className="text-gray-500 leading-relaxed">
          Fast and responsive websites built with modern frontend technologies.
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition duration-300 group">
        <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition">
          🎨
        </div>

        <h3 className="text-2xl font-bold mb-3">
          UI/UX Design
        </h3>

        <p className="text-gray-500 leading-relaxed">
          Beautiful and user-friendly interfaces designed for better experience.
        </p>
      </div>

   
      <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition duration-300 group">
        <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6 group-hover:scale-110 transition">
          ⚡
        </div>

        <h3 className="text-2xl font-bold mb-3">
          Performance Optimization
        </h3>

        <p className="text-gray-500 leading-relaxed">
          Optimized websites for speed, SEO and smooth performance.
        </p>
      </div>

    </div>
  </div>
</section>
  );
}
 
export default ServiceBox;