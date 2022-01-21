import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";
import { Map, GoogleApiWrapper } from "google-maps-react";
import { SideDrawer, DrawerButton } from "../../component/UI/Drawer/";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import NoteIcon from "@material-ui/icons/Note";
import OpenWithIcon from "@material-ui/icons/OpenWith";
import ReceiptIcon from "@material-ui/icons/Receipt";
import PieChartIcon from "@material-ui/icons/PieChart";
import SettingsIcon from "@material-ui/icons/Settings";
import PeopleIcon from "@material-ui/icons/People";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const mainNavbarItems = [
  {
    id: 0,
    icon: <NoteIcon />,
    label: "Мои поля",
    route: "route",
  },
  {
    id: 1,
    icon: <PieChartIcon />,
    label: "Диагностика",
    route: "route",
  },
  {
    id: 2,
    icon: <OpenWithIcon />,
    label: "Рекомендации",
    route: "route",
  },
  {
    id: 3,
    icon: <ReceiptIcon />,
    label: "Заметки",
    route: "route",
  },
];
const settingsNavbarItems = [
  {
    id: 0,
    icon: <PeopleIcon />,
    label: "Профиль",
    route: "route",
  },
  {
    id: 1,
    icon: <NotificationsNoneIcon />,
    label: "Уведомления",
    route: "route",
  },
  {
    id: 2,
    icon: <SettingsIcon />,
    label: "Настройки",
    route: "route",
  },
];

const GisMap = () => {
  const classes = useStyles();

  const navigate = useNavigate();
  const { setIsAuth } = useContext(AuthContext);

  const [drawerToggle, setDrawerToggle] = useState(true);
  const drawerToggleHandler = () =>
    setDrawerToggle((prevDrawerToggle) => !prevDrawerToggle);

  const logOut = () => {
    localStorage.removeItem("auth");
    setIsAuth(false);
    navigate("/login");
  };

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div>
          <span>
            <h1>AEROSPACE</h1>
            <h3>AGRO</h3>
          </span>
        </div>

        <Divider />

        <List>
          {mainNavbarItems.map((text) => (
            <ListItem button key={text.id}>
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText primary={text.label} />
            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          {settingsNavbarItems.map((text) => (
            <ListItem button key={text.id}>
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText primary={text.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div>
        <div>GisMap</div>
        <button onClick={logOut}>Log Out</button>
      </div>
    </div>
  );
};

export default GisMap;

// class MapContainer extends Component {
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         style={{ width: "100%", height: "100%" }}
//         zoom={10}
//         initialCenter={{
//           lat: 55.751306,
//           lng: 37.626457,
//         }}
//       />
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyCwzT2S2gLoOYjRSuRAj-3Phn7apFFby34",
// })(MapContainer);

// const GisMap = () => {
//   const navigate = useNavigate();
//   const { setIsAuth } = useContext(AuthContext);

//   const [drawerToggle, setDrawerToggle] = useState(true);
//   const drawerToggleHandler = () =>
//     setDrawerToggle((prevDrawerToggle) => !prevDrawerToggle);

//   const logOut = () => {
//     localStorage.removeItem("auth");
//     setIsAuth(false);
//     navigate("/login");
//   };

//   return (
//     <>
//       <SideDrawer open={drawerToggle} onClose={drawerToggleHandler} />
//       <div>GisMap</div>
//       <button onClick={logOut}>Log Out</button>
//     </>
//   );
// };

// export default GisMap;
