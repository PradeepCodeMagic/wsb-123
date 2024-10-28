import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './About.jsx'
import Gallery from './Gallery.jsx'
import Contact from './Contact.jsx'
import NotFound from './NotFound.jsx'
import Layout from './Layout.jsx'


const ws=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<App/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/gallery",
          element:<Gallery/>
        }
        ,
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"*",
          element:<NotFound/>
        }
      ]
    }
   
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={ws}  />
  </StrictMode>,
)
