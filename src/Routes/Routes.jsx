import { createBrowserRouter, useLoaderData } from "react-router";
import App from "../App";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import AppDetails from "../components/AppDetails/AppDetails";
import AppNotFound from "../components/AppNotFound/AppNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,

    children: [
      {
        index: true,
        loader: () => fetch("/homeApp.json"),
        path: "/",
        Component: Home,
      },
      {
        loader: () => fetch("/apps.json"),
        path: "app",
        Component: Apps,
      },
      {
        path: "installation",
        Component: Installation,
      },
      {
        path: "/apps/:appId",
        errorElement: <AppNotFound />,
        loader: ({ params }) => {
          return fetch("/apps.json")
            .then((res) => res.json())
            .then((detailsData) => {
              const findApp = detailsData.find(
                (app) => app.id === parseInt(params.appId)
              );
              if (!findApp) {
                throw new Response("App Not Found", { status: 404 });
              }
              return findApp;
            });
        },
        Component: AppDetails,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
