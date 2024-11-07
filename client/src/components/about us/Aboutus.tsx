const developperCrew = [
  {
    name: {
      first: "Foubert",
      last: "Antoine",
    },
    picture: "",
    link: {
      linkedin: "https://www.linkedin.com/in/antoine-foubert-152ba413b/",
      github: "https://github.com/foub404",
      cv: "",
    },
  },
  {
    name: {
      first: "Ido",
      last: "Julien",
    },
    picture: "",
    link: {
      linkedin: "https://www.linkedin.com/in/julien-ido-33bb69335/",
      github: "https://github.com/JuIDO0804",
      cv: "",
    },
  },
  {
    name: {
      first: "Lesage",
      last: "Emeric",
    },
    picture: "",
    link: {
      linkedin: "https://www.linkedin.com/in/emericlesage/",
      github: "https://github.com/lesage-emeric",
      cv: "",
    },
  },
  {
    name: {
      first: "Priez",
      last: "Mathieu",
    },
    picture: "",
    link: {
      linkedin: "https://www.linkedin.com/in/mathieu-priez-39834928/",
      github: "https://github.com/Supremebatmat",
      cv: "",
    },
  },
];

function AboutUs() {
  return (
    <>
      <img src="developper picture" alt="developper name" />
      <h1>Name of developper</h1>
      <p>Little description of the developper</p>
      <a href="">LinkedIn</a>
      <a href="">Github</a>
      <a href="">CV</a>
    </>
  );
}

export default AboutUs;
