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
import From from './assets/component/From.Jsx/From';

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
        element:<PrivetRouter><Order></Order></PrivetRouter>,
        
      },
      {
        path : "/from",
        element:<From/>
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
        element:<PrivetRouter><Pone/></PrivetRouter>,
        loader : () => fetch('http://localhost:5000/cocalola')
        
        
      },
      {
        path:"/coffce/:id",
        element:<PrivetRouter><Ptwo></Ptwo></PrivetRouter>,
        loader : () => fetch('http://localhost:5000/coffie')
        
      },
      {
        path:"/fanta/:id",
        element:<PrivetRouter><Pthree/></PrivetRouter>,
        loader : () => fetch('http://localhost:5000/fanta')
        
      },
      {
        path:"/mrinda/:id",
        element:<PrivetRouter><Pfour></Pfour></PrivetRouter>,
        loader : () => fetch('http://localhost:5000/mirinda')
        
      },
      {
        path:"/papsi/:id",
        element:<PrivetRouter><Pfive></Pfive></PrivetRouter>,
        loader : () => fetch('http://localhost:5000/pepsi')
       
      },
      {
        path:"/redbull/:id",
        element:<PrivetRouter><Psix></Psix></PrivetRouter>,
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
