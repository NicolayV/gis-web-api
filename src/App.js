import { useState, useEffect } from "react";
import { AuthContext } from "./context";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";

import LoginPage from "./pages/loginPage/LoginPage";
import LoginForm from "./pages/LoginForm";
import GisMap from "./pages/mapPage/mapPage";
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
      {/* <BrowserRouter>
        <AppRouter />
      </BrowserRouter> */}
      <LoginPage />
    </AuthContext.Provider>
  );
}

export default App;
