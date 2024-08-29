import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import PrivateRoute from './components/PrivateRoute.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Explore from './pages/Explore.jsx';
import Home from './pages/Home.jsx';
import NearbyStores from './pages/NearbyStores.jsx';
import Product from './pages/Product.jsx';
import Profile from './pages/Profile.jsx';
import ShoppingBag from './pages/ShoppingBag.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import Wishlist from './pages/Wishlist.jsx';
import Root from './Root.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
      {
        path: 'sign-in',
        element: <SignIn />,
      },
      {
        path: 'explore',
        element: <Explore />,
      },
      {
        path: 'explore/:category/:product',
        element: <Product />,
      },
      {
        path: 'reach-us',
        element: <NearbyStores />,
      },
      {
        path: '',
        element: <PrivateRoute />,
        children: [
          {
            path: 'profile',
            element: <Profile />,
          },
          {
            path: 'shopping-bag',
            element: <ShoppingBag />,
          },
          {
            path: 'wishlist',
            element: <Wishlist />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
