import { createBrowserRouter } from "react-router";
import App from "../App";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,

    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "app",
        Component: Apps,
      },
      {
        path: "installation",
        Component: Installation,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
