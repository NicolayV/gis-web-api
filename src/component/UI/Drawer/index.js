import React from "react";
import { IconButton } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import { Divider, List, ListItem, ListSubheader } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FavoriteIcon from "@material-ui/icons/Favorite";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import MenuBookIcon from "@material-ui/icons/MenuBook";

import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import { useStyles } from "./style";

export const SideDrawer = ({ open, onClose }) => {
  return (
    <Drawer open={open} onClose={onClose}>
      <ListSubheader>AEROSPACE agro</ListSubheader>
      <Divider />
      <List>
        <ListItem button key="q">
          <ListItemIcon>
            <BookmarksIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary={"мои поля"} onClick={() => {}} />
          <IconButton onClick={() => {}}>
            <FavoriteIcon color="secondary" />
          </IconButton>
        </ListItem>

        <Divider />

        <ListItem onClick={() => {}} button key={"ifavorite"}>
          <ListItemIcon>
            <MenuBookIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary={"Go to favorite page..."} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export const DrawerButton = ({ open }) => {
  const classes = useStyles();

  return (
    <IconButton
      edge="start"
      // className={classes.menuButton}
      color="secondary"
      aria-label="menu"
      onClick={open}
    >
      <SubscriptionsIcon />
    </IconButton>
  );
};
