import About from "@/components/about";
import Hero from "@/components/hero";
import TeamMembers from "@/components/teammembers";

const aboutdata = {
  title: "About US",

  description:
    "About Tour and Travle is a leading travel agency dedicated to providing unforgettable travel experiences. ",

  image:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",

  buttonText: "Book Tour",
};

function Aboutpage() {
  return (
    <>
      <Hero {...aboutdata} />

      <About />
      <TeamMembers />
    </>
  );
}

 

export default Aboutpage;