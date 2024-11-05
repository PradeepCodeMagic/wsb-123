import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductDetails from './ProductDetails.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cart from './Cart.jsx'
import Wishlist from './Wishlist.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/detail-page/:id",
    element: <ProductDetails/>,
  },
  {
    path: "/wishlist",
    element: <Wishlist/>,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
