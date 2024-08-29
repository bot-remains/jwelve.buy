import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Navlink({ path, text }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `p-4 ${isActive ? 'font-semibold border-b-4' : ''}`
      }
    >
      {text}
    </NavLink>
  );
}

Navlink.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Navlink;
