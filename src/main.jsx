import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './Pages/Register/Register';
import AuthProvider from './providers/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </AuthProvider>
  </React.StrictMode>,
)
