import BlogBox from "@/components/blogbox";
import Hero from "@/components/hero";

const bannerdata = {
  title: "Explore Blog",

  description:
    "Discover the latest travel tips, stories, and guides for your next adventure.",

  image:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",

  buttonText: "Contact Us",
};

function Blogpage() {
  return (
    <>
      <Hero {...bannerdata} />

      <BlogBox />
    </>
  );
}

export default Blogpage;