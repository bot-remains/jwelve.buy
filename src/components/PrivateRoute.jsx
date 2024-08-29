import { Link, Outlet, useNavigate } from 'react-router-dom';

function PrivateRoute() {
  const navigate = useNavigate();
  const currentUser = null;

  return currentUser ? (
    <Outlet />
  ) : (
    <div
      id='error-page'
      className='flex flex-col items-center justify-center gap-4 mt-32'
    >
      <h1 className='text-5xl font-bold'>Oops!</h1>
      <p className='text-3xl font-semibold'>
        You must be signed in to access this page.
      </p>
      <p className='text-xl font-semibold'>
        <i>
          <Link to='/sign-in' className='underline text-secondary'>
            Sign In
          </Link>{' '}
        </i>
        now or
      </p>
      <button
        onClick={() => navigate('/')}
        className='px-6 py-2 mt-2 font-semibold rounded text-custom bg-secondary hover:bg-primary'
      >
        Navigate to home
      </button>
    </div>
  );
}

export default PrivateRoute;
