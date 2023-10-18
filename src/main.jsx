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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement :<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,

      },
      {
        path:"/services",
        element:<Services/>,

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
        element:<Order/>,
      }

    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
