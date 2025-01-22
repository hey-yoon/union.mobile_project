import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Main from "../pages/main/Main";
import Profile from "../pages/profile/Profile";
import Login from "../pages/login/Login";
import Error from "../pages/error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Main />
            },
            {
                path: "/profile",
                element: <Profile />
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    },
    {
        path: "*",
        element: <Error />,
    }
])

export default router;