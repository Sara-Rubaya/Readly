import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Layouts/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import Services from './Components/Services/Services.jsx';
import ForgetPass from './Components/ForgetPass/ForgetPass.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Profile from './Components/Profile/Profile.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
        index:true,
        Component:Home,
      },
      {
        path:'login',
        Component: Login,
      },
      {
        path:'register',
        Component:Register,
      },
      {
        path:'services',
        loader:()=> fetch('/bookData.json'),
        Component:Services,
      },
       {
        path:'forgetPass',
        Component:ForgetPass,
       },
       {
        path:'profile',
        element:<PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>
       }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </StrictMode>,
)
