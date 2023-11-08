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
import UpdateJob from './components/UpdateJob';
import AppliedJobs from './components/AppliedJobs';
import Blogs from './components/Blogs';
import PrivateRoute from './components/PrivateRoute';



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
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>
      },
      {
        path: "/addJobs",
        element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>
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
        element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>
      },
      {
        path:"/singleJob/:id",
        element: <UpdateJob></UpdateJob>,
        loader: ({ params }) => fetch(`https://i-got-the-job-server-9mfm31f86-adibs-projects-900c94ef.vercel.app/jobs/singleJob/${params.id}`),
      },
      {
        path: "/appliedJobs",
        element: <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
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
