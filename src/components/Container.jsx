import PropTypes from 'prop-types';
import Card from './Card.jsx';

function Container({ cardImages }) {
  return (
    <div className='flex w-full gap-16 p-16 bg-white text-grayscale-700'>
      {cardImages.map((item) => (
        <Card key={item.id} url={item.url} heading={item.id} />
      ))}
    </div>
  );
}

Container.propTypes = {
  cardImages: PropTypes.array.isRequired,
};

export default Container;
