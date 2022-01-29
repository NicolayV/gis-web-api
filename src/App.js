import { useState, useEffect } from "react";
import { AuthContext } from "./context";
import { BrowserRouter } from "react-router-dom";
import customTheme from "./assets/theme";

import AppRouter from "./router/AppRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
  }, []);

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />

      <AuthContext.Provider
        value={{
          isAuth,
          setIsAuth,
        }}
      >
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
