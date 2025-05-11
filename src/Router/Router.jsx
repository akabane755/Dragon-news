import { createBrowserRouter } from "react-router";
import HeaderLayout from "../Layouts/HeaderLayout";
import Home from "../Components/Home";

import Categroy from "../Components/Categroy";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Components/Login";
import Register from "../Components/Register";
import NewsDet from "../Components/NewsDet";
import PrivateRouter from "../Components/PrivateRouter";

const router=createBrowserRouter([
    {
        path:"/",
        element:<HeaderLayout></HeaderLayout>,
       children:[
        {
             path:"/",
             Component:Home
        },
        {
            path:"/category/:id",
            Component:Categroy,
            loader:()=>fetch("/news.json")
        }
       ]
    },
    {
        path:"/auth",
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:'/auth/login',
                Component:Login
            },
            {
                path:'/auth/register',
                Component:Register
            }
        ]
    },
    {
        path:"/news-details/:id",
        element:<PrivateRouter>
            <NewsDet></NewsDet>
        </PrivateRouter>,
        loader:()=>fetch("/news.json")
    },
    {
        path:"/*",
        element:<h2>Error404</h2>
    },
])
export {router};