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
import AllJobs from './components/AllJobs';
import ViewDetails from './components/ViewDetails';
import AddJobs from './components/AddJobs';
import Login from './components/Login';
import AuthProvider from './components/AuthProvider';
import Register from './components/Register';
import MyJobs from './components/MyJobs';



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
        element: <AllJobs></AllJobs>
      },
      {
        path: "/viewDetails/:id",
        element: <ViewDetails></ViewDetails>
      },
      {
        path: "/addJobs",
        element: <AddJobs></AddJobs>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/myJobs",
        element: <MyJobs></MyJobs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='bg-blue-100 text-black '>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
)
