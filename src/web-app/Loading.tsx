import React, {useRef, useEffect} from 'react';
let preLoaded = 0;

const preloadData = [
  'https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA'
];

interface Props {
  onLoadComplete: Function
}
const Loading: React.FC<Props> = ({onLoadComplete}) => {

  const loaderRef = useRef<HTMLDivElement>(null);
  const preloadCheck = () => {
    preLoaded === preloadData.length ? startApp() :  setTimeout(() => preloadCheck(), 2000);
  }
  useEffect(() => {
    //lets preload everyhing first
    preloadData.forEach((image) => {
      const img = new Image();
      img.onload = () => preLoaded++;
      img.src = image;
    });
    preloadCheck();
  })
  const startApp = () => {
    loaderRef.current?.classList.add('bounce-out');
    setTimeout( () => {
      onLoadComplete()
    })
  }

  return (
    <div className='loader'>
      <div ref={loaderRef}>
        <div>
          <h1>Lehekülg laeb</h1>
        </div>
      </div>
    </div>
  );
}

export default Loading;