import { createBrowserRouter } from "react-router-dom";
import LayOut from "../layOut";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

import Products from "../Home/Products";

const router = createBrowserRouter([

    {
      path: "/",
      element: <LayOut></LayOut>,
      errorElement: <ErrorPage />,
     
      children: [
        {
          path: "/",
          element: <Products></Products>,
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