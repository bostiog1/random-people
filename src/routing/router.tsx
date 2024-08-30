import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { PageNotFound } from "../pages/PageNotFound/PageNotFound";
import { ErrorPage } from "../components/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
