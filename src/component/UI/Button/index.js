import { Button, Link } from "@mui/material";
import React from "react";
import styles from "./style";
const ButtonForm = ({ children, disabled = false, ...props }) => {
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
};

export default ButtonForm;
