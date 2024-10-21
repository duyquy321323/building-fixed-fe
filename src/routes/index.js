import LayoutDefault from "../components/layouts/LayoutDefault";
import Home from "../pages/Home";
import Project from "../pages/Project";
import News from "../pages/News";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Introduce from "../pages/Introduce";

export const routes = [
    {
        path: '/',
        element: <LayoutDefault />,
        children: [
            {
                path: '/',
                element: <Home />
            },

            {
                path: '/project',
                element: <Project />
            },

            {
                path: '/news',
                element: <News />
            },

            {
                path: '/contact',
                element: <Contact />
            },

            {
                path: '/introduce',
                element: <Introduce />
            },
        ]
    },

    {
        path: '/login',
        element: <Login />
    },

    {
        path: '/register',
        element: <Register />
    }
]