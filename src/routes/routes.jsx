import { createBrowserRouter } from "react-router-dom";
// import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
// import Home from "../pages/Home";
import Login from "../components/Login";
import Home from "../pages/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        }
      ]
    },
  ]);
export {router}