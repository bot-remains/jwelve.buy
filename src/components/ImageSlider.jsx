import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { GoDotFill } from 'react-icons/go';

function ImageSlider({ images }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((prevIdx) => (prevIdx === images.length - 1 ? 0 : prevIdx + 1));
    }, 5000);

    return () => clearInterval(id);
  }, [images.length, idx]);

  const styles = {
    backgroundImage: `
      url(${images[idx].url})
    `,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  return (
    <div className='w-full h-[90vh] relative overflow-hidden'>
      <div style={styles} className='w-full h-full'></div>
      <div className='absolute top-0 left-0 w-full h-full opacity-70 bg-grayscale-950'></div>

      <div className='absolute bottom-0 flex flex-wrap items-center justify-center w-full gap-6 px-16 py-6 gap-x-10'>
        <div className='flex items-center justify-center absolute top-[-15%] left-1/2 transform -translate-x-1/2 gap-0 text-xs rounded-full px-1'>
          {images.map((_, i) => (
            <GoDotFill
              key={i}
              onClick={() => setIdx(i)}
              className={`cursor-pointer ${
                idx === i ? 'text-gold-500' : 'text-silver-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

ImageSlider.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageSlider;
