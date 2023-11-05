import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Error from './components/Error';
import Main from './components/Main';
import Jobs from './components/Jobs';
import AllJobs from './components/AllJobs';
import ViewDetails from './components/ViewDetails';
import AddJobs from './components/AddJobs';



const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Main></Main>
      },
      {
        path: "/allJobs",
        element:<AllJobs></AllJobs>
      },
      {
        path: "/viewDetails/:id",
        element: <ViewDetails></ViewDetails>
      },
      {
        path: "/addJobs",
        element: <AddJobs></AddJobs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='bg-blue-100 text-black '> 
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
)
