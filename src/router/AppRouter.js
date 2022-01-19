import React, { useContext } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { AuthContext } from "../context";
import LoginPage from "../pages/LoginPage/";
import GisMap from "../pages/MapPage/";

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);
  console.log("isAuth", isAuth);

  const routesPublic = useRoutes([
    { path: "/login", element: <LoginPage /> },
    { path: "/*", element: <Navigate to="/login" /> },
  ]);

  const routesPrivate = useRoutes([
    { path: "/gismap", element: <GisMap /> },
    { path: "/*", element: <Navigate to="/gismap" /> },
  ]);

  const GuardRoute = ({ children }) => {
    return isAuth ? children : routesPublic;
  };

  return <GuardRoute> {routesPrivate}</GuardRoute>;
};

export default AppRouter;
