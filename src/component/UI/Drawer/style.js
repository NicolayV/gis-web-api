// import { makeStyles } from "@mui/material";

const drawerWidth = 223;

const styles = {
  menuButton: {
    // marginRight: theme.spacing(2),
  },

  root: {
    display: "flex",
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      boxSizing: "border-box",
      background:
        "radial-gradient(209.86% 47.01% at -23.54% 100%, rgba(255, 246, 35, 0.102) 0%, rgba(255, 243, 35, 0) 100%), #131529",
      color: "#FFFFFF",
    },
  },

  drawerPaper: {
    width: drawerWidth,
  },

  listItemIcon: {
    color: "#FFFFFF",
  },

  // necessary for content to be below app bar
  // toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.default,
    // padding: theme.spacing(3),
  },
};

export default styles;
