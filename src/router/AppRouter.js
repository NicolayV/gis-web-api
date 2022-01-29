import React, { useContext } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { AuthContext } from "../context";
import LoginPage from "../pages/LoginPage/";
import GisMap from "../pages/MapPage/";
import TestMap from "../pages/testPage";
import { MapTiler } from "../component/MapTiler";

const AuthProvider = ({ route, children }) => {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? children : route;
};

const AppRouter = () => {
  const routesPublic = useRoutes([
    { path: "/login", element: <LoginPage /> },
    { path: "/*", element: <Navigate to="/login" /> },
  ]);

  const routesPrivate = useRoutes([
    { path: "/gismap", element: <GisMap /> },
    { path: "/maptiler", element: <MapTiler /> },
    // { path: "/gismaptest", element: <TestMap /> },
    { path: "/*", element: <Navigate to="/gismap" /> },
  ]);

  return <AuthProvider route={routesPublic}>{routesPrivate}</AuthProvider>;
};

export default AppRouter;
