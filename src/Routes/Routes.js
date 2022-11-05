import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Blog from "../Pages/Blog/Blog";
import CourseDetails from "../Pages/Courses/CourseDetails/CourseDetails";
import Premium from "../Pages/Courses/CourseDetails/Premium/Premium";
import Courses from "../Pages/Courses/Courses";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import Profile from "../Pages/Others/Profile/Profile";
import Error from "./Error";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () =>
          fetch("https://grow-your-skill-server-tau.vercel.app/courses"),
      },
      {
        path: "/courses/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(
            `https://grow-your-skill-server-tau.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/premium/:id",
        element: (
          <PrivateRoute>
            <Premium></Premium>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://grow-your-skill-server-tau.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: "*",
        element: <Error></Error>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);
