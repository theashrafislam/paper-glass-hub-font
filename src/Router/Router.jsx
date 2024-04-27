import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllArtAndCreftItems from "../Pages/AllArtAndCreftItems";
import MyArtAndCraftList from "../Pages/MyArtAndCraftList";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/allArtAndCreftItems',
            element: <AllArtAndCreftItems></AllArtAndCreftItems>
        },
        {
            path: '/myArtAndCraftList',
            element: <MyArtAndCraftList></MyArtAndCraftList>
        }
      ]
    },
]);

export default router;