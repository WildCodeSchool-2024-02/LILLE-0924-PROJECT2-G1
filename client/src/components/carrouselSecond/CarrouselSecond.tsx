import { useEffect, useState } from "react";
import "./CarrouselSecond.css";

interface imageFromApiProps {
  webformatURL: string;
}

function RandomImagesSecond() {
  const [images, setImages] = useState<string[]>();

  useEffect(() => {
    fetch(
      "https://pixabay.com/api/?key=46964402-9754107f6087e15486eb4050e&q=restaurants&image_type=photo",
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
      <div className="carousel-Second">
        <div className="carousel-Second-Track">
          {images?.map((image: string) => (
            <img src={image} key={image} alt="carousel-Img-Second" />
          ))}
        </div>
      </div>
    </>
  );
}

export default RandomImagesSecond;
