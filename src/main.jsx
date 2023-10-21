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
import Pone from './assets/component/IdElement/Pone';
import Ptwo from './assets/component/IdElement/Ptwo';
import Pthree from './assets/component/IdElement/Pthree';
import Pfour from './assets/component/IdElement/Pfour';
import Pfive from './assets/component/IdElement/Pfive';
import Psix from './assets/component/IdElement/Psix';

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
        loader : () => fetch('http://localhost:5000/cocalola')
        
        
      },
      {
        path:"/coffce",
        element:<Coffce/>,
        loader : () => fetch('http://localhost:5000/coffie')
        
      },
      {
        path:"/fanta",
        element:<Fanta/>,
        loader : () => fetch('http://localhost:5000/fanta')
        
      },
      {
        path:"/mrinda",
        element:<Mrinda/>,
        loader : () => fetch('http://localhost:5000/mirinda')
        
      },
      {
        path:"/papsi",
        element:<Papsi/>,
        loader : () => fetch('http://localhost:5000/pepsi')
       
      },
      {
        path:"/redbull",
        element:<RedBull/>,
        loader : () => fetch('http://localhost:5000/redbull')
        
      },
      // neww id add 

      {
        path:"/cocola/:id",
        element:<Pone/>,
        loader : () => fetch('http://localhost:5000/cocalola')
        
        
      },
      {
        path:"/coffce/:id",
        element:<Ptwo></Ptwo>,
        loader : () => fetch('http://localhost:5000/coffie')
        
      },
      {
        path:"/fanta/:id",
        element:<Pthree/>,
        loader : () => fetch('http://localhost:5000/fanta')
        
      },
      {
        path:"/mrinda/:id",
        element:<Pfour></Pfour>,
        loader : () => fetch('http://localhost:5000/mirinda')
        
      },
      {
        path:"/papsi/:id",
        element:<Pfive></Pfive>,
        loader : () => fetch('http://localhost:5000/pepsi')
       
      },
      {
        path:"/redbull/:id",
        element:<Psix></Psix>,
        loader : () => fetch('http://localhost:5000/redbull')
        
      },
      

    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
