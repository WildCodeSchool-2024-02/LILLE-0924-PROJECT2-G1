import { useEffect, useState } from "react";
import "./Carrousel.css";

interface imageFromApiProps {
  tags: string;
  webformatURL: string;
}

function RandomImages() {
  const [images, setImages] = useState();

   useEffect(() => {
   
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
  
  return (
    <>
      <div className="carousel">
        <div className="carousel-gradient gradient-left"></div>
        <div className="carousel-track">
          {
            images?.map((image: imageFromApiProps, index) => (
              <img src={image} key={`${index}-img`} alt="" />
            ))
          }
        </div>
        <div className="carousel-gradient gradient-right"></div>
      </div>
    </>
  );
}

export default RandomImages;
