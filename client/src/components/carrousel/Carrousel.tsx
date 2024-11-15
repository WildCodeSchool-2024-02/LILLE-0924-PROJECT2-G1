import { useEffect, useState } from "react";
import "./Carrousel.css";

interface imageFromApiProps {
  webformatURL: string;
}

function RandomImages() {
  const [images, setImages] = useState<string[]>();

  useEffect(() => {
    fetch(
      "https://pixabay.com/api/?key=46964402-9754107f6087e15486eb4050e&q=food&image_type=photo",
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const newArrayImages: string[] = [];
        data?.hits.map((image: imageFromApiProps) => {
          newArrayImages.push(image.webformatURL);
        });
        return setImages(newArrayImages);
      });
  }, []);

  return (
    <>
      <div className="carousel">
        <div className="carousel-track">
          {images?.map((image: string) => (
            <img src={image} key={image} alt="carousel" />
          ))}
        </div>
      </div>
    </>
  );
}

export default RandomImages;
