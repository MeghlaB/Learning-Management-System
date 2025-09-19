import {
  createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Dashboard from "../Layouts/Dashboard";
import Add_Course from "../Pages/Dashboard/Admin/Add_Course";
import CoursesDetails from "../Pages/Courses/CoursesDetails";
import Register from "../Pages/Auth/Register";
import Login from "../Pages/Auth/Login";
import AllUser from "../Pages/Dashboard/Admin/AllUser";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: '/auth/register',
        element: <Register></Register>
      },
      {
        path:'/auth/login',
        element:<Login></Login>
      },
      {
        path: '/course/:id',
        element: <CoursesDetails></CoursesDetails>
      }
    ],

  },

  {
    path: 'dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'add-course',
        element: <Add_Course></Add_Course>
      },
      {
        path:'all-user',
        element:<AllUser></AllUser>
      }

    ],
  },

]);

export default router