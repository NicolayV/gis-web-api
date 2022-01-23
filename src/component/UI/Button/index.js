import { Button } from "@mui/material";
import React from "react";
const ButtonForm = ({
  type,
  variant,
  sx,
  children,
  disabled = false,
  ...props
}) => {
  return (
    <Button
      {...props}
      sx={sx}
      variant={variant}
      disabled={disabled}
      type={type}
    >
      {children}
    </Button>
  );
};

export default ButtonForm;
