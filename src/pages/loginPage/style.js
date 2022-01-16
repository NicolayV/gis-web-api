import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  loginWrapper: {
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
    position: "absolute",
    left: "800px",
    top: "215px",
  },
  h3Title: {
    color: "#FFFFFF",
    position: "absolute",
    left: "940px",
    top: "250px",
  },

  layout: {
    background: "rgba(63, 99, 142, 0.38)",
    backgroundBlendMode: "overlay",
    backdropFilter: "blur(70px)",
  },

  signIn: {
    fontFamily: "HandelGothic TL",
    color: "#FFFFFF",
    margin: "0px 12px",
    fontSize: "20px",
    letterSpacing: "0.06em",
  },
  signUp: {
    width: "143px",
    margin: "0px 12px",
    fontSize: "20px",
    alignItems: "flex-end",
    fontFamily: "HandelGothic TL",
    lineHeight: "24px",
    letterSpacing: "0.06em",
  },

  inputEmail: {
    border: "1px solid #FFFFFF",
    height: "56px",
    padding: "0px 12px 0px 16px",
    margin: "15px 0px",
    display: "flex",
    boxSizing: "border-box",
    alignItems: "center",
    flexDirection: "row",
  },
  inputPassword: {
    border: "1px solid #FFFFFF",
    height: "56px",
    padding: "0px 12px 0px 16px",
    margin: "15px 0px",
    display: "flex",
    boxSizing: "border-box",
    alignItems: "center",
    flexDirection: "row",
  },
  checkbox: {
    position: "relative",
    top: "-9px",
    left: "-15px",
  },
  button: {
    width: "460px",
    height: "56px",
    top: "-9px",
    left: "-5px",
    fontFamily: "HandelGothic TL",
    color: "#FFF323",
    margin: "8px 0px",
    border: "1px solid #FFF323",
  },
  link: {
    position: "relative",
    left: "165px",
    fontFamily: "HandelGothic TL",
    color: "#FFF323",
  },
}));
