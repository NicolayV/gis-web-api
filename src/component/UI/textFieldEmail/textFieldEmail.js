import React from "react";
// import { useStyles } from "./style";

import TextField from "@material-ui/core/TextField";
import { InputAdornment } from "@material-ui/core";
import { MailTwoTone } from "@material-ui/icons";

const InputEmail = ({ children, ...props }) => {
  // const cl = useStyles();

  return (
    <TextField
      {...props}
      // className={cl.input}
      name="email"
      id="email"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <MailTwoTone />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default InputEmail;
