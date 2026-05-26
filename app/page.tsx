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

  buttonText: "Book Tour",
};

function Home() {
  return (
    <>
      <Hero {...bannerdata} />

      <ServiceBox />

      <AboutUs />

      <BlogBox />
    </>
  );
}

export default Home;