import { useState, useEffect } from "react";
import { AuthContext } from "./context";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import LoginForm from "./pages/LoginForm";
import GisMap from "./pages/GisMap";
import AppRouter from "./router/AppRouter";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <BrowserRouter>
        {/* <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/gismap" element={<GisMap />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes> */}

        <AppRouter />
      </BrowserRouter>
      {/* <Login /> */}
    </AuthContext.Provider>
  );
}

export default App;
