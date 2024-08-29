import { useState } from 'react';
import {
  FaEnvelope,
  FaLinkedin,
  FaPhone,
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
} from 'react-icons/fa6';
import { GiHeartNecklace, GiNecklace } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function Footer() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedback('');
  };

  return (
    <footer className='flex flex-col items-center w-full gap-10 p-10 text-gray-700 bg-gradient-to-tr from-primary to-util'>
      <div className='flex justify-center w-full gap-32'>
        <div className='flex flex-col max-w-[33%]'>
          <Link to='/'>
            <div className='flex justify-center text-5xl font-bold'>
              <GiNecklace className='text-yellow-500 ' />
              <h1 className='font-bold '>
                <span className='text-yellow-500'>j</span>welve
                <span className='text-lg font-semibold'>.buy</span>
              </h1>
            </div>
          </Link>
          <div className='flex items-center justify-center my-4 text-white'>
            <hr className='w-[45%] border-grayscale-300 border-2 rounded' />
            <GiHeartNecklace className='mx-2 text-2xl text-yellow-500' />
            <hr className='w-[45%] border-grayscale-300 border-2 rounded' />
          </div>
          <div className='flex items-center justify-center gap-4 text-3xl'>
            <FaSquareInstagram className='cursor-pointer' />
            <FaSquareFacebook className='cursor-pointer' />
            <FaSquareXTwitter className='cursor-pointer' />
            <FaLinkedin className='cursor-pointer' />
          </div>
        </div>
        <div className='max-w-[33%]'>
          <hr className='w-[55px] border-secondary border-2 rounded' />
          <ul className='mt-2'>
            <li className='text-2xl text-grayscale-700'>Jwelve</li>
            <li className='mt-2'>Careers with us</li>
            <li className='mt-1'>Terms & Conditions</li>
            <li className='mt-1'>Privacy Policy</li>
            <li className='mt-1'>Cookies Policy</li>
          </ul>
        </div>
        <div className='w-[425px]'>
          <hr className='w-[55px] border-secondary border-2 rounded' />
          <form onSubmit={handleSubmit} className='mt-2'>
            <label
              htmlFor='feedback'
              className='block text-2xl text-grayscale-700'
            >
              How was your experience?
            </label>
            <textarea
              id='feedback'
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className='block w-full p-2 mt-2 border border-none rounded-md resize-none bg-custom focus:outline-none'
              placeholder="We'd love to get your feedback..."
              rows='4'
            ></textarea>
            <button
              type='submit'
              className='px-6 py-2 mt-3 font-semibold rounded text-custom bg-secondary hover:bg-primary'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className='flex justify-center w-full gap-32'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d313316.35719262203!2d72.63886995566213!3d21.46215720056052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d7b76227ebb%3A0x36786915836cc754!2sKalyan%20Jewellers%20India%20Limited!5e0!3m2!1sen!2sin!4v1721674731798!5m2!1sen!2sin'
          width='400'
          height='300'
          // style='border:0;'
          allowFullScreen=''
          loading='lazy'
          // referrerpolicy='no-referrer-when-downgrade'
        ></iframe>

        <div className='flex flex-col gap-8'>
          <div className='max-w-[450px]'>
            <hr className='w-[55px] border-secondary border-2 rounded' />
            <ul className='mt-2'>
              <li className='text-2xl text-grayscale-700 '>About Us</li>
              <li className='mt-2 '>
                At jwelve, we create timeless jewelry with a blend of classic
                and contemporary designs. Crafted with care from the finest
                materials, our pieces celebrate your unique style and special
                moments. Thank you for choosing us!
              </li>
            </ul>
          </div>
          <div className='max-w-[600px]'>
            <hr className='w-[55px] border-secondary border-2 rounded' />
            <ul className='mt-2 max-w-[50%]'>
              <li className='text-2xl text-grayscale-700 '>Contact Us</li>
              <li className='flex items-center gap-2 mt-2 ml-2'>
                <FaEnvelope />
                xyz@gmail.com
              </li>
              <li className='flex items-center gap-2 mt-2 ml-2'>
                <FaPhone />
                +91 9999999999
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center w-full'>
        <hr className='w-[80%] border-zinc-600 border rounded mb-3' />
        jwelve.buy 2024 &#169; All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
