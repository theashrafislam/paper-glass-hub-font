import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllArtAndCreftItems from "../Pages/AllArtAndCreftItems";
import MyArtAndCraftList from "../Pages/MyArtAndCraftList";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import AddCraftItem from "../Pages/AddCraftItem";
import PrivateRoute from "./PrivateRoute";
import ViewDetailsPage from "../Pages/ViewDetailsPage";
import UpdatePage from "../Pages/UpdatePage";
import ArtAndCartSub from "../Pages/ArtAndCartSub";


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
            element: <AllArtAndCreftItems></AllArtAndCreftItems>,
            loader: () => fetch('https://paper-glass-hub-client.vercel.app/craftItems')
        },
        {
            path: '/myArtAndCraftList',
            element: <PrivateRoute><MyArtAndCraftList></MyArtAndCraftList></PrivateRoute>,
            loader: () => fetch('https://paper-glass-hub-client.vercel.app/craftItems')
        },
        {
            path: '/addCarftItem',
            element: <PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
        },
        {
            path: "/viewDetailsPage/:id",
            element: <PrivateRoute><ViewDetailsPage></ViewDetailsPage></PrivateRoute>,
            loader: ({params}) => fetch(`https://paper-glass-hub-client.vercel.app/craftItems/${params.id}`)
        },
        {
            path: '/updatePage/:id',
            element: <PrivateRoute><UpdatePage></UpdatePage></PrivateRoute>,
            loader: ({params}) => fetch(`https://paper-glass-hub-client.vercel.app/craftItems/${params.id}`)
        },
        {
            path: '/artAndCart/:subCategory',
            element: <ArtAndCartSub></ArtAndCartSub>,
            loader: ({params}) => fetch(`https://paper-glass-hub-client.vercel.app/craftItems`) 
        }
      ]
    },
]);

export default router;