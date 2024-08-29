import PropTypes from 'prop-types';

function IconText({ Icon, text }) {
  return (
    <div className='flex items-center gap-2 p-4 text-sm'>
      <Icon className='text-lg cursor-pointer' />{' '}
      {text && <span className='cursor-pointer'>{text}</span>}
    </div>
  );
}

IconText.propTypes = {
  Icon: PropTypes.elementType,
  text: PropTypes.string,
};

export default IconText;
