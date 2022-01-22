import { MailTwoTone, VpnKey } from "@mui/icons-material";
import People from "@mui/icons-material/People";
import { IconButton, Input, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import styles from "./style";

const FormInput = ({ children, inputType = "text", ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  if (inputType === "text") {
    return (
      <Input
        sx={styles.inputForm}
        {...props}
        startAdornment={
          <InputAdornment position="start">
            <People sx={styles.inputFormSvg} />
          </InputAdornment>
        }
      />
    );
  }

  if (inputType === "email") {
    return (
      <Input
        sx={styles.inputForm}
        {...props}
        startAdornment={
          <InputAdornment position="start">
            <MailTwoTone sx={styles.inputFormSvg} {...props} />
          </InputAdornment>
        }
      />
    );
  }

  if (inputType === "password") {
    return (
      <Input
        sx={styles.inputForm}
        {...props}
        startAdornment={
          <InputAdornment position="start">
            <VpnKey sx={styles.inputFormSvg} />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              sx={styles.inputFormSvg}
              onClick={(prev) => setShowPassword(!showPassword)}
            >
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
