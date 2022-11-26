import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllPhone from "../../Pages/AllPhone/AllPhone";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

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
                element: <AllPhone></AllPhone>,
                loader: ({params}) => fetch (`http://localhost:5000/category/${params.category}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }

        ]
    }
])
export default router;