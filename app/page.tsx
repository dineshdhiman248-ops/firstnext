import Image from "next/image";
// page.tsx

import Hero from "@/components/hero";
import ServiceBox from "@/components/servicebox";
import AboutUs from "@/components/about";
import BlogBox from "@/components/blogbox";

const bannerdata = {
  title: "Explore Himachal",

  description:
    "Discover Shimla, Manali, Kullu and beautiful travel destinations.",

  image:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",

  buttonText: "Contact Us",
};


const Servicedata = [
    {
      id: 1,
      title: "Service 1",
      image: "/images/about.png",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 1",
    },
    {
      id: 2,
      title: "Service 2",
      image: "/images/about.png",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 2",
    },
    {
      id: 3,
      title: "Service3",
      image: "/images/about.png",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 3",
    },
   
  ];


function Home() {
  return (
    <>
      <Hero {...bannerdata} />

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
        using the latest technologies like Next.js, React and Tailwind CSS.dffdf
      </p>
    </div> 
 <ServiceBox Servicedata={Servicedata} />

  </div>

 
</section>



    

      <AboutUs />

      <BlogBox />
    </>
  );
}

export default Home;