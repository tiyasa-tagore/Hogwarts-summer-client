import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/login";
import SignUp from "../pages/Signup/Signup";
import Error from "../pages/Error/Error";
import InstructorsPage from "../pages/Instructor/InstructorsPage";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'instructor',
        element: <InstructorsPage></InstructorsPage>
      },
        
      ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
  ]);