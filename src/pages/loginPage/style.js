import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  loginWrapper: {
    flexDirection: "column",
    margin: "-8px",

    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#02060f",
    backgroundImage: "url('./images/earth.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",

    "& > div": {
      width: 453,
      height: 413,
      position: "relative",
      backdropFilter: "blur(70px)",
      padding: "40px 77px",

      "&:before, &:after, &>:first-child:before, &>:first-child:after": {
        content: "' '",
        position: "absolute",
        width: 46,
        height: 16,
        borderColor: "#fff",
        borderStyle: "solid",
      },

      "&:before": { top: 0, left: 0, borderWidth: "1px 0 0 1px" },
      "&:after": { top: 0, right: 0, borderWidth: "1px 1px 0 0" },
      "&>:first-child:before": {
        bottom: 0,
        left: 0,
        borderWidth: "0 0 1px 1px",
      },
      "&>:first-child:after": {
        bottom: -5,
        right: 0,
        borderWidth: "0 1px 1px 0",
      },
    },
  },

  h1Title: {
    color: "#FFFFFF",
    marginBottom: "0px",
  },

  h3Title: {
    color: "#FFFFFF",
    marginTop: "0px",
  },

  layout: {
    background: "rgba(63, 99, 142, 0.38)",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },

  tabs: {
    display: "flex",
  },

  signIn: {},

  signUp: {},

  inputPassword: {
    // marginTop: 20,
    // marginBottom: 20,
    // display: "blocK",
    border: "1px solid #FFFFFF",
  },

  inputEmail: {
    marginTop: 20,
    marginBottom: 20,
    display: "blocK",
    border: "1px solid #FFFFFF",
  },

  checkbox: {
    justifyContent: "flex-start",
    padding: "10px 0px",
    margin: "10px 0px",
  },

  button: {
    border: "1px solid #FFF323",
    padding: "10px 0px",
    margin: "10px 0px",
  },

  link: {
    color: "#FFF323",
    alignSelf: "center",
    padding: "10px",
    margin: "10px",
  },

  aaa: {},
}));
