import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import TestForm from './components/TestForm/TestForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/TestForm',
        element: <TestForm></TestForm>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-7xl mx-auto'>
    <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
