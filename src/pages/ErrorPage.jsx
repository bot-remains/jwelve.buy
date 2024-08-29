import { useNavigate, useRouteError } from 'react-router-dom';

function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id='error-page'
      className='flex flex-col items-center justify-center gap-4 mt-32'
    >
      <h1 className='text-5xl font-bold'>Oops!</h1>
      <p className='text-3xl font-semibold'>
        Sorry, an unexpected error has occurred.
      </p>
      <p className='text-xl font-semibold'>
        <i>{error.statusText || error.message}</i>
      </p>
      <button
        onClick={() => navigate('/')}
        className='px-6 py-2 mt-3 font-semibold rounded text-custom bg-secondary hover:bg-primary'
      >
        Navigate to home
      </button>
    </div>
  );
}

export default ErrorPage;
