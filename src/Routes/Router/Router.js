import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Error from "../../Pages/Common/Error/Error";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import Register from "../../Register/Register";
import Private from "../PrivateRoute/Private";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error />,
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/orders',
                element: <Private><Orders /></Private>
            },
            {
                path: '/checkout/:id',
                loader: async ({ params }) => fetch(`https://genius-car-server-mu-eight.vercel.app/services/${params.id}`),
                element: <Private><CheckOut /></Private>
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },

]);

export default router;