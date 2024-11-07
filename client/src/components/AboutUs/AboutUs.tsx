interface developperCrewProps {
  name: {
    first: string;
    last: string;
  };
  picture: string;
  link: {
    linkedin: string;
    github: string;
    cv: string;
  };
}

const developperCrew: developperCrewProps[] = [
  {
    name: {
      first: "Foubert",
      last: "Antoine",
    },
    picture: "server/public/assets/images/imgProAntoineF.jpeg",
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
    picture: "server/public/assets/images/imgProEmericL.jpeg",
    link: {
      linkedin: "https://www.linkedin.com/in/emericlesage/",
      github: "https://github.com/lesage-emeric",
      cv: "https://cvdesignr.com/p/6720d59f20957",
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
      <img src={developperCrew[0].picture} alt={developperCrew[0].name.last} />
      <h1>
        {developperCrew[0].name.last} {developperCrew[0].name.first}
      </h1>
      <p>Little description of the developper</p>
      <a href={developperCrew[0].link.linkedin}>LinkedIn</a>
      <a href={developperCrew[0].link.github}>Github</a>
      <a href={developperCrew[0].link.cv}>CV</a>
    </>
  );
}

export default AboutUs;
