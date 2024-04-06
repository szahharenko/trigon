import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


interface Props {
  onChange: (index: number, item: React.ReactNode) => void;
    //images: Array<{ original: string, thumbnail: string }>
}

const Gallery: React.FC<Props> = ({onChange}) => {
  return (
    <Carousel onChange={onChange}>
      <div>
          <img src="https://picsum.photos/id/1018/1000/600/" alt="" />
      </div>
      <div>
          <img src="https://picsum.photos/id/1018/1000/600/" alt=""/>
      </div>
      <div>
          <img src="https://picsum.photos/id/1018/1000/600/" alt="" />
      </div>
    </Carousel>
  );
}

export default Gallery;