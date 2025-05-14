import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './pages/AddCoffee';
import UpdateCoffee from './pages/UpdateCoffee';
import Home from './pages/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path:"/addcoffe",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path:"/updatecoffe",
    element: <UpdateCoffee></UpdateCoffee>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
