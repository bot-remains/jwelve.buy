import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';

function Root() {
  return (
    <>
      <Navbar />
      <div className='pt-[60px]'>
        <Outlet />
      </div>
    </>
  );
}

export default Root;
