import { createTheme } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import { teal } from "@material-ui/core/colors";

const customTheme = createTheme({
  palette: {
    primary: teal,
    secondary: orange,
  },

  typography: {
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: "italic",
    },
  },
});

export default customTheme;
