import { createTheme } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import { teal } from "@material-ui/core/colors";

import { handelGothicTL } from "../fonts";

const customTheme = createTheme({
  palette: {
    primary: teal,
    secondary: orange,
  },

  typography: {
    fontFamily: "Handel-Gothic-TL",

    //     subtitle1: {
    //       fontSize: 12,
    //     },
    //     body1: {
    //       fontWeight: 500,
    //     },
    //     button: {
    //       fontStyle: "italic",
    //     },
  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
  },

  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [handelGothicTL],
      },
    },
  },
});

export default customTheme;
