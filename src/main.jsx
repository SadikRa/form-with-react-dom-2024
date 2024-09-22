import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import TestForm from './components/TestForm/TestForm';
import AnotherForm from './components/AnotherForm/AnotherForm';
import RefForm from './components/RefForm/RefForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/TestForm',
        element: <TestForm></TestForm>
      },
      {
        path: '/anotherForm',
        element: <AnotherForm></AnotherForm>
      },
      {
        path: '/refform',
        element: <RefForm></RefForm>
      },

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
