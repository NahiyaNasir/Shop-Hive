import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


import ProtectedRoute from "./ProtectedRoute";
import Products from "../Home/Products";
import LayOut from "../LayOut";

const router = createBrowserRouter([

    {
      path: "/",
      element:  <ProtectedRoute><LayOut></LayOut></ProtectedRoute>,
      errorElement: <ErrorPage />,
     
      children: [
        {
          path: "/",
          element:<Products></Products>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element:<Register></Register>,
        },
      ],
     
      
    },
    
  
  
    ]);
  
    export default router