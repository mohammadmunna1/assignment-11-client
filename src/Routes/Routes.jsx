import React from 'react';
import {
  createBrowserRouter
} from "react-router-dom";
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home/Home';
import Register from '../Pages/Login/Register';
import Login from '../Pages/Login/Login';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Blog from '../Pages/Blog/Blog';
import AddAToy from '../Pages/AddAToy/AddAToy';
import AllToys from '../Pages/AllToys/AllToys';
import MyToys from '../Pages/MyToys/MyToys';
import PrivateRoute from './PrivateRoute';
import SingleToyDetails from '../Pages/SingleToyDetails/SingleToyDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'addAToy',
        element: <AddAToy></AddAToy>
      },
      {
        path: 'allToys',
        element: <AllToys></AllToys>,
        loader: () => fetch('https://assigenment11-server.vercel.app/toys?limit=20')
      },
      {
        path: 'myToys',
        element: <MyToys></MyToys>
      },
      {
        path: 'singleToyDetails/:id',
        element: <PrivateRoute><SingleToyDetails></SingleToyDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assigenment11-server.vercel.app/toys/${params.id}`)
      }
    ]
  },
]);

const Routes = () => {
  return (
    <div>

    </div>
  );
};

export default router;