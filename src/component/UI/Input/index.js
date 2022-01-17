import React, { useState } from "react";
import { useStyles } from "./style";

import {
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
} from "@material-ui/core";
import { MailTwoTone, People, VpnKey } from "@material-ui/icons";

const FormInput = ({
  children,
  inputType = "text",
  email,
  password,
  loginName,
  ...props
}) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  if (inputType === "text") {
    return (
      <>
        <Input
          className={classes.inputForm}
          {...props}
          startAdornment={
            <InputAdornment position="start">
              <People />
            </InputAdornment>
          }
        />
        <FormHelperText>
          {(loginName.isDirty && loginName.isEmpty && (
            <span>Поле не может быть пустым</span>
          )) ||
            (loginName.isDirty && loginName.minLengthError && (
              <span>Не корректная длина имени</span>
            )) ||
            (loginName.isDirty && loginName.maxLengthError && (
              <span>Не корректная длина имени</span>
            ))}
        </FormHelperText>
      </>
    );
  }

  if (inputType === "email") {
    return (
      <>
        <Input
          className={classes.inputForm}
          {...props}
          startAdornment={
            <InputAdornment position="start">
              <MailTwoTone />
            </InputAdornment>
          }
        />
        <FormHelperText>
          {(email.isDirty && email.isEmpty && (
            <span>Поле не может быть пустым</span>
          )) ||
            (email.isDirty && email.minLengthError && (
              <span>Не корректная длина</span>
            )) ||
            (email.isDirty && email.emailError && (
              <span>Не корректный емейл</span>
            ))}
        </FormHelperText>
      </>
    );
  }

  if (inputType === "password") {
    return (
      <>
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
        <FormHelperText>
          {(password.isDirty && password.isEmpty && (
            <span>Пароль не может быть пустым</span>
          )) ||
            (password.isDirty && password.maxLengthError && (
              <span>Слишком длинный пароль</span>
            )) ||
            (password.isDirty && password.minLengthError && (
              <span>Не корректная длина пароля</span>
            ))}
        </FormHelperText>
      </>
    );
  }
};

export default FormInput;
