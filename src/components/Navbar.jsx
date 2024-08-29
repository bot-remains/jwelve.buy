import { useState } from 'react';
import { GiNecklace } from 'react-icons/gi';

import { FaSearch } from 'react-icons/fa';
import {
  FaAngleRight,
  FaBagShopping,
  FaHeart,
  FaLocationDot,
  FaStore,
  FaUser,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import IconText from './IconText';
import Navlink from './Navlink';

const Navbar = () => {
  const currentUser = null;
  const [zipcode, setZipcode] = useState('Pin Code');
  const [inputValue, setInputValue] = useState('');

  const [showMenu, setShowMenu] = useState(false);
  let timeoutId;
  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setShowMenu(true);
  };
  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setShowMenu(false);
    }, 100);
  };

  const [showPin, setShowPin] = useState(false);
  let pinTimeOutId;
  const handlePinEnter = () => {
    clearTimeout(pinTimeOutId);
    setShowPin(true);
  };
  const handlePinLeave = () => {
    pinTimeOutId = setTimeout(() => {
      setShowPin(false);
    }, 100);
  };

  return (
    <nav className='fixed z-50 flex items-center justify-between w-full h-[60px] px-16 bg-primary text-custom'>
      <Link to='/' className='flex gap-2 text-2xl font-bold cursor-pointer'>
        <GiNecklace className='text-4xl text-yellow-500' />
        <h1 className='text-3xl font-bold '>
          <span className='text-yellow-500'>j</span>welve
          <span className='text-lg font-semibold'>.buy</span>
        </h1>
      </Link>
      <div className='flex items-center justify-center '>
        <Navlink path='/' text='Home' />
        <Navlink path='/explore' text='Explore' />
      </div>
      <div className='relative flex text-grayscale-700 '>
        <input
          placeholder='Search...'
          className='h-8 p-4 pr-8 rounded-full bg-custom w-80 focus:border-none focus:outline-none'
        />
        <FaSearch className='text-grayscale-400 cursor-pointer absolute top-0 right-0 transform translate-x-[-75%] translate-y-[50%]' />
      </div>
      <div className='flex items-center justify-center'>
        <div
          className='relative cursor-pointer'
          onMouseEnter={handlePinEnter}
          onMouseLeave={handlePinLeave}
        >
          <IconText Icon={FaLocationDot} text={zipcode} />
          {showPin && (
            <div className='absolute top-[125%] right-0 z-50 rounded-lg bg-custom text-grayscale-800 w-[250px] text-center p-3'>
              <h1 className='text-xl font-semibold'>Enter your zip code</h1>
              <input
                placeholder='Zip Code'
                maxLength='6'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className='w-full h-8 p-4 mt-4 bg-white border-2 rounded-md border-grayscale-200 focus:border-2 focus:outline-none'
              />
              <button
                type='submit'
                onClick={() =>
                  setZipcode(inputValue.length < 6 ? 'Pin Code' : inputValue)
                }
                className='w-full px-6 py-2 mt-3 font-semibold rounded text-custom bg-secondary hover:bg-primary'
              >
                Submit
              </button>
            </div>
          )}
        </div>

        <Link to='/shopping-bag'>
          <IconText Icon={FaBagShopping} />
        </Link>
        <Link to='/reach-us'>
          <IconText Icon={FaStore} />
        </Link>
        <div
          className='relative cursor-pointer'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <IconText Icon={FaUser} />
          {showMenu && (
            <div className='absolute z-50 top-[125%] right-1/4 bg-custom text-grayscale-800 w-48 rounded-lg'>
              {currentUser ? (
                <>
                  <Link
                    to='/profile'
                    className='flex items-center gap-2 p-3 pl-3 border-gray-300 cursor-pointer hover:bg-white hover:rounded-lg'
                  >
                    <FaUser className='text-grayscale-400' /> Profile
                  </Link>
                  <Link
                    to='/wishlist'
                    className='flex items-center gap-2 p-3 pl-3 border-gray-300 cursor-pointer hover:bg-white hover:rounded-lg'
                  >
                    <FaHeart className='text-grayscale-400' /> Wishlist
                  </Link>
                  <Link
                    to='/sign-in'
                    className='flex justify-between p-3 pl-3 border-gray-300 cursor-pointer hover:bg-white hover:rounded-lg'
                  >
                    Sign Out <FaAngleRight className='text-grayscale-400' />
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to='/sign-up'
                    className='flex items-center justify-between p-3 pl-3 border-gray-300 cursor-pointer hover:bg-white hover:rounded-lg'
                  >
                    Sign Up <FaAngleRight className='text-grayscale-400' />
                  </Link>
                  <Link
                    to='/sign-in'
                    className='flex justify-between p-3 pl-3 border-gray-300 cursor-pointer hover:bg-white hover:rounded-lg'
                  >
                    Sign In <FaAngleRight className='text-grayscale-400' />
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
