import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";



import Products from "../Home/Products";
import LayOut from "../LayOut";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([

    {
      path: "/",
      element:  <LayOut></LayOut>,
      errorElement: <ErrorPage />,
     
      children: [
        {
          path: "/",
          element:<ProtectedRoute><Products></Products></ProtectedRoute>,
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