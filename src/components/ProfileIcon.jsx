import PropTypes from 'prop-types';

function ProfileIcon({ url }) {
  const profilePic = {
    backgroundImage: `url(${url})`,
    backgroundPosition: 'top',
    backgroundSize: 'cover',
  };
  return (
    <div
      className='w-8 h-8 border-none rounded-full cursor-pointer bg-grayscale-950'
      style={profilePic}
    ></div>
  );
}

ProfileIcon.propTypes = {
  url: PropTypes.string,
};

export default ProfileIcon;
