import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


interface Props {
  onChange: (index: number, item: React.ReactNode) => void;
  title: String;
  images: Array<{ src: string, step: number }>
}

const Gallery: React.FC<Props> = ({onChange, images, title}) => {
  return (
    <Carousel onChange={onChange}>
      {
        images.map((image, index) => <div key={index}><img src={image.src} alt={`${title}-${index}`} /></div>)
      }
    </Carousel>
  );
}

export default Gallery;