import About from "@/components/about";
import Hero from "@/components/hero";
import TeamMembers from "@/components/teammembers";


const aboutdata = {
  title: "About US",

  description:
    "About Tour and Travle is a leading travel agency dedicated to providing unforgettable travel experiences. ",

  image:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",

  buttonText: "Contact Us",
};

 const teamMembers = [
    {
      id: 1,
      name: "Member 1",
      image: "/images/about.png",
      description: "Deliver innovative and impactful solutions for businesses worldwide. 1",
    },
    {
      id: 2,
      name: "Member 2",
      image: "/images/about.png",
      description: "Deliver innovative and impactful solutions for businesses worldwide 2",
    },
    {
      id: 3,
      name: "Member 3",
      image: "/images/about.png",
      description: "Deliver innovative and impactful solutions for businesses worldwide 3",
    },
    {
      id: 4,
      name: "Member 4",
      image: "/images/about.png",
      description: "Deliver innovative and impactful solutions for businesses worldwide 4",
    },
    {
      id: 5,
      name: "Member 5",
      image: "/images/about.png",
      description: "Deliver innovative and impactful solutions for businesses worldwide 5",
    },
    {
      id: 6,
      name: "Member 6",
      image: "/images/about.png",
      description: "Deliver innovative and impactful solutions for businesses worldwide 6",
    },
    {
      id: 7,
      name: "Member 7",
      image: "/images/about.png",
      description: "Deliver innovative and impactful solutions for businesses worldwide 7",
    },

     {
      id: 8,
      name: "Member 8",
      image: "/images/about.png",
      description: "Deliver innovative and impactful solutions for businesses worldwide 88",
    },
  ];



function Aboutpage() {
  return (
    <>
      <Hero {...aboutdata} />

      <About />
      <TeamMembers members={teamMembers} />
    </>
  );
}

 

export default Aboutpage;