import React, { useContext } from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { AuthContext } from "../context";
import LoginPage from "../pages/LoginPage/";
import GisMap from "../pages/MapPage/";

const AuthProvider = ({ route }) => {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? <Outlet /> : route;
};

const AppRouter = () => {
  const routesPublic = useRoutes([
    { path: "/login", element: <LoginPage /> },
    { path: "/*", element: <Navigate to="/login" /> },
  ]);

  const routesPrivate = useRoutes([
    { path: "/gismap", element: <GisMap /> },
    { path: "/*", element: <Navigate to="/gismap" /> },
  ]);

  return <AuthProvider route={routesPublic}>{routesPrivate}</AuthProvider>;
};

export default AppRouter;
