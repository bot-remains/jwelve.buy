import PropTypes from 'prop-types';
import { useState } from 'react';
import { GiHeartNecklace } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function Card({ url, heading }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const quickLinks = [
    'Hairclip',
    'Earring',
    'Necklace',
    'Pendant',
    'Locket',
    'Chain',
    'Medallion',
    'Pins',
    'Belly Chain',
    'Armlet',
    'Bangle',
    'Bracelet',
    'Ring',
    'Toe Ring',
    'Anklets',
  ];

  return (
    <div
      className='w-[33%] cursor-pointer rounded-xl perspective-1000'
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-[500px] rounded-lg transform transition-transform duration-500 ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        <div
          className={`absolute inset-0 w-full h-full rounded-lg backface-hidden ${
            isFlipped ? 'opacity-0 hidden' : 'opacity-100'
          }`}
        >
          <img src={url} className='object-cover w-full h-full rounded-lg' />
        </div>
        <div
          className={`absolute inset-0 w-full h-full p-12 bg-grayscale-100 rounded-lg flex flex-col items-center transition-opacity duration-500 ${
            isFlipped ? 'opacity-100 rotate-y-180' : 'opacity-0 hidden'
          }`}
        >
          <h1 className='text-4xl font-semibold'>{heading}</h1>
          <div className='flex items-center justify-center w-3/4 text-white'>
            <hr className='w-[45%] border-grayscale-300 border-2 rounded' />
            <GiHeartNecklace
              className={`mx-2 text-2xl ${
                heading === 'Silver'
                  ? 'text-silver-500'
                  : heading === 'Gold'
                  ? 'text-gold-500'
                  : 'text-diamond-500'
              }`}
            />
            <hr className='w-[45%] border-grayscale-300 border-2 rounded' />
          </div>
          <div className='flex flex-col w-full h-full px-4 mt-8 overflow-auto break-words'>
            {quickLinks.map((link, idx) => (
              <Link
                key={idx}
                to={`/explore/${heading.toLowerCase()}/${link.toLowerCase()}`}
                className='p-2 w-fit'
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  url: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};

export default Card;
