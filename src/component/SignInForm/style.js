import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  checkbox: {
    marginTop: 5,
    justifyContent: "flex-start",
    color: "white",
  },
  checkboxSvg: {
    color: "white",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
}));
