import { useEffect, useState } from "react";
import "./Carrousel.css";

interface imageFromApiProps {
  tags: string;
  webformatURL: string;
}

function RandomImages() {
  // j'ai crée un state qui va accueiller les images
  const [images, setImages] = useState();

  // utilisation du hook useEffect pour faire une requête à l'API pixabay
  // pour ne pas que ca fasse une boucle infinie. On met un tableau vide en deuxième paramètre  de useEffect
  useEffect(() => {
    // fetch pour récupérer les images de l'API pixabay
    fetch(
      "https://pixabay.com/api/?key=46964402-9754107f6087e15486eb4050e&q=food&image_type=photo",
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const newArrayImages = [];
        data?.hits.map((image: imageFromApiProps) => {
          newArrayImages.push(image.webformatURL);
        });
        return setImages(newArrayImages);
      });
  }, []);

  // j'ai crée un nouveau tableau pour stocker uniquement les liens d'images à affiches et pas les objets entiers

  // j'ai mapé sur imagesFromApi.hits parce que c'est comme ça que l'objet reçu était structuré par l'api: { tatatite, hits:[tableau d'ojects qui m'intéresse...]}

  return (
    <>
      <div className="carousel">
        <div className="carousel-gradient gradient-left"></div>
        <div className="carousel-track">
          {
            images?.map((image: imageFromApiProps, index) => (
              <img src={image} key={`${index}-img`} alt="" />
            )) /* afficher les images avec un map , et trouver une librairie qui fait ce que tu veux faire */
          }
        </div>
        <div className="carousel-gradient gradient-right"></div>
      </div>
    </>
  );
}

export default RandomImages;
