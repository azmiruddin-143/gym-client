import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import AddSchedule from './Components/AddSchedule';
import AllSchedule from './Components/AllSchedule';
import Register from './Components/Register';
import Login from './Components/Login';
import MianRoot from './Components/MianRoot';
import UpdateSchedule from './Components/UpdateSchedule';
import AuthProvider from './Components/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MianRoot></MianRoot>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addschedule",
        element: <AddSchedule></AddSchedule>
      },
      {
        path: "/allschedule",
        element: <AllSchedule></AllSchedule>,
        loader: () => fetch('http://localhost:5000/schedule')
      },
      {
        path: "/update/:id",
        element: <UpdateSchedule></UpdateSchedule>,
        loader: ({ params }) => fetch(`http://localhost:5000/schedule/${params.id}`)
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  </AuthProvider>
)
