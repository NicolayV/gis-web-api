import React from "react";
import Button from "@mui/material/Button";
import styles from "./style";

const CommonButton = ({
  children,
  color,
  disabled,
  size,
  sx,
  variant,
  ...props
}) => {
  return (
    <Button
      {...props}
      color={color}
      disabled={disabled}
      size={size}
      sx={styles.btn}
      variant={variant}
    >
      {children}
    </Button>
  );
};

export default CommonButton;
