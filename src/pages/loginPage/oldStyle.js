import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    position: "absolute",
    width: "1376px",
    height: "591px",
    left: "-5px",
    top: "146px",
    background:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, rgba(0, 0, 0, 0) 82.67%, rgba(0, 0, 0, 0.2) 100%)",
    // background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, rgba(0, 0, 0, 0) 82.67%, rgba(0, 0, 0, 0.2) 100%), url(image.png);
    mixBlendMode: "lighten",
  },

  layout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "42px 78px",
    position: "absolute",
    width: "453px",
    height: "413px",
    left: "457px",
    top: "172px",
    background: "rgba(63, 99, 142, 0.38)",
    backgroundBlendMode: "overlay",
    backdropFilter: "blur(70px)",
  },

  tabs: {
    /* Auto layout */
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "0px",

    position: "static",
    width: "209px",
    height: "24px",
    left: "78px",
    top: "42px",

    /* Inside auto layout */
    flex: "none",
    order: "0",
    flexGrow: "0",
    margin: "22px 0px",
  },

  signIn: {
    /* Вход */
    position: "static",
    width: "54px",
    height: "24px",
    left: "0px",
    top: "0px",

    fontFamily: "HandelGothic TL",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "24px",
    /* identical to box height */
    display: "flex",
    alignItems: "flex-end",
    letterSpacing: "0.06em",

    color: "#FFFFFF",

    /* Inside auto layout */
    flex: "none",
    order: "0",
    flexGrow: "0",
    margin: "0px 12px",
  },

  signUp: {
    /* Регистрация */
    position: "static",
    width: "143px",
    height: "24px",
    left: "66px",
    top: "0px",

    fontFamily: "HandelGothic TL",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "24px",
    /* identical to box height */
    display: "flex",
    alignItems: "flex-end",
    letterSpacing: "0.06em",

    color: "rgba(164, 115, 193, 0.49)",

    mixBlendMode: "normal",

    /* Inside auto layout */
    flex: "none",
    order: "1",
    flexGrow: "0",
    margin: "0px 12px",
  },

  inputEmail: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px 12px 0px 16px",

    position: "static",
    width: "297px",
    height: "56px",
    left: "0px",
    top: "0px",

    border: "1px solid #FFFFFF",
    boxSizing: "border-box",

    /* Inside auto layout */

    flex: "none",
    order: "0",
    flexGrow: "0",
    margin: "15px 0px",
  },

  inputPassword: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px 12px 0px 16px",

    position: "static",
    width: "297px",
    height: "56px",
    left: "0px",
    top: "71px",

    border: "1px solid #FFFFFF",
    boxSizing: "border-box",

    /* Inside auto layout */

    flex: "none",
    order: "1",
    flexGrow: "0",
    margin: "15px 0px",
  },

  checkbox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px",

    position: "static",
    width: "130px",
    height: "42px",
    left: "0px",
    top: "142px",

    /* Inside auto layout */

    flex: "none",
    order: "2",
    flexGrow: "0",
    margin: "15px 0px",
  },

  buttonGroup: {
    /* Group 54 */

    position: "static",
    width: "297px",
    height: "41px",
    left: "0px",
    top: "0px",

    filter: "drop-shadow(0px 14px 27px rgba(255, 199, 0, 0.14))",

    /* Inside auto layout */

    flex: "none",
    order: "0",
    flexGrow: "0",
    margin: "8px 0px",
  },

  button: {
    /* button */
    position: "static",
    left: "24.18%",
    right: "24.18%",
    top: "19.51%",
    bottom: "17.07%",

    fontFamily: "HandelGothic TL",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "26px",
    /* identical to box height, or 186% */
    letterSpacing: "0.46px",

    color: "#FFF323",

    /* Inside auto layout */
    flex: "none",
    order: "0",
    flexGrow: "0",
    margin: "8px 0px",
  },

  buttonLink: {
    position: "static",
    width: "134px",
    height: "17px",
    left: "81.5px",
    top: "10px",

    fontFamily: "HandelGothic TL",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "17px",
    /* identical to box height */

    textAlign: "center",
    letterSpacing: "0.06em",

    color: "#FFF323",

    /* Inside auto layout */

    flex: "none",
    order: "0",
    flexGrow: "0",
    margin: "0px 10px",
  },
}));
