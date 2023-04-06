import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Layout/Home';
import Shop from './component/Shop/Shop';
import Orders from './component/Orders/Orders';
import Inventory from './component/Inventory/Inventory';
import ManageInventory from './component/ManageInventory/ManageInventory';
import Login from './component/Login/Login';
import Error from './component/Error/Error';
import cartProductLoaded from './Loaded/CartLoadedProduct';
import Checkbox from './component/Checkbox/Checkbox';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Shop />
      },
      {
        path: '/orders',
        element: <Orders />,
        loader: cartProductLoaded
      },
      {
        path: '/checkbox',
        element: <Checkbox></Checkbox>
      },
      {
        path: '/inventory',
        element: <Inventory />
      },
      {
        path: '/manageInventory',
        element: <ManageInventory />
      },
      {
        path: '/login',
        element: <Login />
      }, 
      {
        path: '*',
        element: <Error />
      }
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
