import "./AboutUs.css";
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
  description: string;
}

const developperCrew: developperCrewProps[] = [
  {
    name: {
      first: "Antoine",
      last: "Foubert",
    },
    picture: "/public/images/imgProAntoineF.png",
    link: {
      linkedin: "https://www.linkedin.com/in/antoine-foubert-152ba413b/",
      github: "https://github.com/foub404",
      cv: "",
    },
    description:
      "Après plusieurs années en logistique, j’ai choisi de me reconvertir dans le développement web, attiré par l’innovation et la créativité. J’apprends les technologies modernes tout en appliquant mes compétences en organisation. Motivé, je vise à m’épanouir pleinement dans ce nouveau métier.",
  },
  {
    name: {
      first: "Julien",
      last: "Ido",
    },
    picture: "/public/images/imgProJulienI.png",
    link: {
      linkedin: "https://www.linkedin.com/in/julien-ido-33bb69335/",
      github: "https://github.com/JuIDO0804",
      cv: "",
    },
    description:
      "Julien trop beau, grand, musclé, gentil. Actuellement en formation developpement web pour faire quelque chose de ma vie",
  },
  {
    name: {
      first: "Emeric",
      last: "Lesage",
    },
    picture: "/public/images/imgProEmericL.jpeg",
    link: {
      linkedin: "https://www.linkedin.com/in/emericlesage/",
      github: "https://github.com/lesage-emeric",
      cv: "https://cvdesignr.com/p/6720d59f20957",
    },
    description:
      "Ancien infirmier, je me suis reconvertit dans le développement web pour me rapprocher de ma passion pour l'informatique.",
  },
  {
    name: {
      first: "Mathieu",
      last: "Priez",
    },
    picture: "/public/images/imgProMathieuP.png",
    link: {
      linkedin: "https://www.linkedin.com/in/mathieu-priez-39834928/",
      github: "https://github.com/Supremebatmat",
      cv: "",
    },
    description:
      "Ancien Conseiller Clientèle en banque. Aujourd'hui, je me lance dans le monde du développement web à la Wild Code School",
  },
];

function AboutUs() {
  return (
    <div className="crew">
      {developperCrew.map((dev) => (
        <div className="dev" key={dev.name.first}>
          <img
            src={dev.picture}
            alt={dev.name.last}
            key={`${dev.name.first}-img`}
          />
          <h1 key={`${dev.name.last}`}>
            {dev.name.first} {dev.name.last}
          </h1>
          <p key={`${dev.description}-Github`}>{dev.description}</p>
          <div className="links">
            <a href={dev.link.linkedin} key={`${dev.name.first}-linkedin`}>
              <img src="/public/images/linkedin.png" alt="linkedin" />
            </a>
            <a href={dev.link.github} key={`${dev.name.first}-Github`}>
              <img src="/public/images/github-logo.png" alt="github" />
            </a>
            <a href={dev.link.cv} key={`${dev.name.first}-Github`}>
              <img src="/public/images/cv (1).png" alt="CV" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );

export default AboutUs;
