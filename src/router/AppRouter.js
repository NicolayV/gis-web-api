import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "../context";
import LoginPage from "../pages/LoginPage/";
import GisMap from "../pages/MapPage/";

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);

  console.log("isAuth", isAuth);

  return isAuth ? (
    <Routes>
      <Route path="/gismap" element={<GisMap />} />
      <Route path="*" element={<Navigate to="/gismap" />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRouter;
