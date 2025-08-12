import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layout/MainLayout.jsx';
import Home from './Component/Home.jsx';
import AuthLayout from './Page/AuhLayout/AuthLayout.jsx';
import Login from './Page/LoginPage/Login.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import RagisterPage from './Page/RegisterPage/RagisterPage.jsx';



import BrowseTask from './Page/BrowseTask/BrowseTask.jsx';
import PrivateRouter from './Provider/PrivateRouter.jsx';
import TaskcardDetails from './Component/TaskcardDetails.jsx';
import MyPostedTasks from './Page/MypostedTasks.jsx';

import UpdateTask from '../src/Component/UpdateTask.jsx'
import AddTask from '../src/Component/AddTask.jsx'
import ViewBids from './Component/ViewBids.jsx';
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx';
import ContuctUs from './Component/Footer Data/ContuctUs.jsx';
import TermCon from './Component/Footer Data/TermCon.jsx';
import { ThemeProvider } from './Component/Context/ThemeContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
      {
        index:true,
        loader:()=> fetch('https://frelancer-service.vercel.app/tasks'),
        Component:Home
      },

     

      
    ]
  },


  {
   path:"*",
   element:<ErrorPage></ErrorPage>
  },
   {
     path:"/add-task",
     
     element:<PrivateRouter> <AddTask></AddTask>   </PrivateRouter>
     
      },

   
    {
      path:"/browse-tasks",
      loader:()=>fetch("https://frelancer-service.vercel.app/tasks"),
      Component:BrowseTask
    },
    {
      path:"/taskcard-details/:id",
      loader:({params}) =>fetch(`https://frelancer-service.vercel.app/tasks/${params.id}`),
     element:<PrivateRouter><TaskcardDetails></TaskcardDetails></PrivateRouter>
    },
   
   
  {
    path:"/my-posted-tasks",
  
    
    element:<PrivateRouter><MyPostedTasks></MyPostedTasks></PrivateRouter>
  },
  {
    path:"/update-task/:id",
    element:<PrivateRouter><UpdateTask></UpdateTask></PrivateRouter>
  },

  {
    path:"/view-bids/:taskId",
   
    element:<PrivateRouter><ViewBids></ViewBids></PrivateRouter>
  },
  {
    path:"/contact",
    Component:ContuctUs
  },
   {
    path:"/term-condition",
    Component:TermCon
   },
  {
  
    path:"/auth",
    Component:AuthLayout,
    children:[
        {
            path:"/auth/login",
            Component:Login
        },
        {
            path:"/auth/register",
           element:<RagisterPage></RagisterPage>
        },
        // {
        //   path:"/auth/forgot-password",
        //   Component:ForgetPassword
        // }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
 <ThemeProvider>   
<AuthProvider>  <RouterProvider router={router}></RouterProvider></AuthProvider>


</ThemeProvider>


  </StrictMode>,
)
