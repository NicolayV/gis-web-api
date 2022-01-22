import { Button, Link } from "@mui/material";
import React from "react";
import styles from "./style";
const ButtonForm = ({
  children,
  disabled = false,
  inputType = "submit",
  ...props
}) => {
  if (inputType === "submit") {
    return (
      <Button
        {...props}
        sx={styles.button}
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
      <Link {...props} sx={styles.link}>
        {children}
      </Link>
    );
  }
};

export default ButtonForm;
