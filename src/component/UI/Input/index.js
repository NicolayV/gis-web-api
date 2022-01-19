import React, { useState } from "react";
import { useStyles } from "./style";

import { IconButton, Input, InputAdornment } from "@material-ui/core";
import { MailTwoTone, People, VpnKey } from "@material-ui/icons";

const FormInput = ({ children, inputType = "text", ...props }) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  if (inputType === "text") {
    return (
      <Input
        className={classes.inputForm}
        {...props}
        startAdornment={
          <InputAdornment position="start">
            <People />
          </InputAdornment>
        }
      />
    );
  }

  if (inputType === "email") {
    return (
      <Input
        className={classes.inputForm}
        {...props}
        startAdornment={
          <InputAdornment position="start">
            <MailTwoTone />
          </InputAdornment>
        }
      />
    );
  }

  if (inputType === "password") {
    return (
      <Input
        className={classes.inputForm}
        {...props}
        startAdornment={
          <InputAdornment position="start">
            <VpnKey />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={(prev) => setShowPassword(!showPassword)}>
              {showPassword ? "скрыть" : "показать"}
            </IconButton>
          </InputAdornment>
        }
        type={showPassword ? "text" : "password"}
      />
    );
  }
};

export default FormInput;
