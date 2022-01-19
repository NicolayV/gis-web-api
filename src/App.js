import { useState, useEffect } from "react";
import { AuthContext } from "./context";
import { BrowserRouter } from "react-router-dom";
import customTheme from "./assets/theme";
import { ThemeProvider } from "@material-ui/core";

import AppRouter from "./router/AppRouter";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
  }, []);

  return (
    <ThemeProvider theme={customTheme}>
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
