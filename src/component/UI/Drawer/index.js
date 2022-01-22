import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

import { mainDrawerItems, settingsDrawerItems } from "./consts/drawerItems";
import styles from "./style";

const DrawerUi = () => {
  //   const [drawerToggle, setDrawerToggle] = useState(true);
  //   const drawerToggleHandler = () =>
  //     setDrawerToggle((prevDrawerToggle) => !prevDrawerToggle);

  return (
    <Drawer sx={styles.drawer} variant="permanent" anchor="left">
      <div>
        <span>
          <h1>AEROSPACE</h1>
          <h3>AGRO</h3>
        </span>
      </div>

      <Divider />
      <List>
        {mainDrawerItems.map((text) => (
          <ListItem button key={text.id}>
            <ListItemIcon sx={styles.listItemIcon}>{text.icon}</ListItemIcon>
            <ListItemText primary={text.label} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {settingsDrawerItems.map((text) => (
          <ListItem button key={text.id}>
            <ListItemIcon sx={styles.listItemIcon}>{text.icon}</ListItemIcon>
            <ListItemText primary={text.label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default DrawerUi;
