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
		picture: "server/public/assets/images/imgProAntoineF.jpeg",
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
		picture: "",
		link: {
			linkedin: "https://www.linkedin.com/in/julien-ido-33bb69335/",
			github: "https://github.com/JuIDO0804",
			cv: "",
		},
		description: "",
	},
	{
		name: {
			first: "Emeric",
			last: "Lesage",
		},
		picture: "server/public/assets/images/imgProEmericL.jpeg",
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
		picture: "",
		link: {
			linkedin: "https://www.linkedin.com/in/mathieu-priez-39834928/",
			github: "https://github.com/Supremebatmat",
			cv: "",
		},
		description: "",
	},
];

function AboutUs() {
	return developperCrew.map((dev) => (
		<>
			<img
				src={dev.picture}
				alt={dev.name.last}
				key={`${dev.name.first}-img`}
			/>
			<h1 key={`${dev.name.last}`}>
				{dev.name.first} {dev.name.last}
			</h1>
			<p key={`${dev.description}-Github`}>{dev.description}</p>
			<a href={dev.link.linkedin} key={`${dev.name.first}-linkedin`}>
				LinkedIn
			</a>
			<a href={dev.link.github} key={`${dev.name.first}-Github`}>
				Github
			</a>
			<a href={dev.link.cv} key={`${dev.name.first}-Github`}>
				CV
			</a>
		</>
	));
}

export default AboutUs;
