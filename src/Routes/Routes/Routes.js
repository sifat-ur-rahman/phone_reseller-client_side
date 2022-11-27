import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AllBuyers from "../../Pages/AllBuyers/AllBuyers";
import AllPhone from "../../Pages/AllPhone/AllPhone";
import AllSellers from "../../Pages/AllSellers/AllSellers";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyBooking from "../../Pages/MyBooking/MyBooking";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import ReportedItems from "../../Pages/ReportedItems/ReportedItems";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/category/:category',
                element: <PrivateRoute><AllPhone></AllPhone></PrivateRoute> ,
                loader: ({params}) => fetch (`http://localhost:5000/category/${params.category}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout> </PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyBooking></MyBooking>
            },
            {
                path: '/dashboard/myOrders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allSellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AllBuyers></AllBuyers>

            },
            {
                path: '/dashboard/reportedItems',
                element: <ReportedItems></ReportedItems>
            }
        ]

    }
])
export default router;