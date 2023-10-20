import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/component/Header/Root/Root.jsx';
import Error from './assets/component/Error/Error.jsx';
import Home from './assets/component/Header/Home/Home.jsx';
import About from './assets/component/About/About';
import Contact from './assets/component/Contact/Contact';
import Services from './assets/component/Services/Services';
import Login from './assets/component/LogIn/Login';
import Register from './assets/component/Register/Resgister';
import Order from './assets/component/order/Order';
import AuthProvider from './assets/component/Authprovider/AuthProvider';
import PrivetRouter from './assets/component/PrivetRoter/PrivetRouter';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement :<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: () => fetch('http://localhost:5000/Brand')
      },
      {
        path:"/about",
        element:<PrivetRouter><About/></PrivetRouter>,
      },
      {
        path:"/contact",
        element:<Contact/>,

      },
      {
        path:"/services",
        element:<PrivetRouter><Services/></PrivetRouter>,

      },
      {
        path:"login",
        element:<Login/>,
      },
      {
        path:"/register",
        element:<Register/>,
      },
      {
        path:"/order",
        element:<PrivetRouter><Order/></PrivetRouter>,
      }

    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
