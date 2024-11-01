import LayoutAdmin from "../components/layouts/LayoutAdmin";
import LayoutDefault from "../components/layouts/LayoutDefault";
import LayoutLogin from "../components/layouts/LayoutLogin";
import BuildingManagement from "../pages/BuildingManagement";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Introduce from "../pages/Introduce";
import Login from "../pages/Login";
import News from "../pages/News";
import Project from "../pages/Project";
import Register from "../pages/Register";

export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/project",
        element: <Project />,
      },

      {
        path: "/news",
        element: <News />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/introduce",
        element: <Introduce />,
      },
    ],
  },

  {
    path: "/",
    element: <LayoutLogin />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: <LayoutAdmin />,
    children: [
      {
        path: "/building-management",
        element: <BuildingManagement />,
      },
    ],
  },
];
