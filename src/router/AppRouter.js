import React, { useContext } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { AuthContext } from "../context";
import LoginPage from "../pages/LoginPage/";
import GisMap from "../pages/MapPage/";

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
    { path: "/*", element: <Navigate to="/gismap" /> },
  ]);

  return <AuthProvider route={routesPublic}>{routesPrivate}</AuthProvider>;
};

export default AppRouter;
