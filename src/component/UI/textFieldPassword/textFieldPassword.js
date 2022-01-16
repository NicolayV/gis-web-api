import React from "react";
// import { useStyles } from "./style";

import TextField from "@material-ui/core/TextField";
import { IconButton, InputAdornment } from "@material-ui/core";
import { VpnKey } from "@material-ui/icons";

const InputPassword = ({ children, ...props }) => {
  // const classes = useStyles();

  return (
    <TextField
      {...props}
      // className={classes.inputPassword}
      name="password"
      id="password"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <VpnKey />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton edge="end">показать</IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default InputPassword;
