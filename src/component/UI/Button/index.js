import { Button, Link } from "@material-ui/core";
import React from "react";
import { useStyles } from "./style";
const ButtonForm = ({
  children,
  disabled = false,
  inputType = "submit",
  ...props
}) => {
  const classes = useStyles();

  if (inputType === "submit") {
    return (
      <Button
        {...props}
        className={classes.button}
        variant="outlined"
        disabled={disabled}
        type="submit"
      >
        {children}
      </Button>
    );
  }
  if (inputType === "link") {
    return (
      <Link {...props} className={classes.link}>
        {children}
      </Link>
    );
  }
};

export default ButtonForm;
