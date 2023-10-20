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
import Cocola from './assets/component/brands/Cocola';
import Coffce from './assets/component/brands/coffce';
import Fanta from './assets/component/brands/Fanta';
import Mrinda from './assets/component/brands/Mrinda';
import Papsi from './assets/component/brands/papsi';
import RedBull from './assets/component/brands/RedBull';

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
        path:"/cocola",
        element:<Cocola/>,
        loader : () =>  fetch('http://localhost:5000/cocolas') 
        
      },
      {
        path:"/coffce",
        element:<Coffce/>,
        loader: () => fetch('http://localhost:5000/coffiec')
      },
      {
        path:"/fanta",
        element:<Fanta/>,
        loader: () => fetch('http://localhost:5000//fantas')
      },
      {
        path:"/mrinda",
        element:<Mrinda/>,
        loader: () => fetch('http://localhost:5000/mrindas')
      },
      {
        path:"/papsi",
        element:<Papsi/>,
        loader : ()=> fetch('http://localhost:5000/pepsie')
      },
      {
        path:"/redbull",
        element:<RedBull/>,
        loader : ()=> fetch('http://localhost:5000/redbulls')
      },

    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
