import React, { useContext, useEffect, useState } from "react";

import styles from "./style";

import FormInput from "../UI/Input";
import ButtonForm from "../UI/Button";
import useInput from "../../hooks/useInput";
import { AuthContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { Box, Checkbox, FormControlLabel, FormHelperText } from "@mui/material";

const SignInForm = () => {
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const email = useInput("", { isEmpty: true, minLength: 3, isEmail: true });
  const password = useInput("", { isEmpty: true, minLength: 3, maxLength: 8 });

  const [checked, setChecked] = useState(false);

  const [errorMessage, setErrorMessage] = useState(null);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(email.value, password.value, checked);
    setIsAuth(true);
    localStorage.setItem("auth", "true");
    navigate("/gismap");
  };

  const { isDirty, isEmpty, minLengthError, emailError } = email;
  useEffect(() => {
    if (!isDirty) {
      return;
    }
    if (isEmpty) {
      setErrorMessage(<span>Поле не может быть пустым</span>);
      return;
    }
    if (minLengthError) {
      setErrorMessage(<span>Не корректная длина</span>);
      return;
    }
    if (emailError) {
      setErrorMessage(<span>Не корректный емейл</span>);
      return;
    }
    setErrorMessage(null);
  }, [isDirty, isEmpty, minLengthError, emailError]);

  return (
    <Box component="form" sx={styles.form} onSubmit={onSubmitHandler}>
      <FormInput
        inputType="email"
        onChange={(e) => email.onChange(e)}
        onBlur={(e) => email.onBlur(e)}
        value={email.value}
      />
      <FormHelperText error>{errorMessage}</FormHelperText>

      <FormInput
        inputType="password"
        onChange={(e) => password.onChange(e)}
        onBlur={(e) => password.onBlur(e)}
        value={password.value}
      />
      <FormHelperText error>
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

      <FormControlLabel
        sx={styles.checkbox}
        control={
          <Checkbox
            sx={styles.checkboxSvg}
            checked={checked}
            onChange={(prev) => setChecked(!checked)}
          />
        }
        label="Запомни меня"
      />

      <ButtonForm
        inputType="submit"
        // disabled={!email.inputValid || !password.inputValid}
      >
        Войти
      </ButtonForm>
      <ButtonForm inputType="link">Забыли пароль?</ButtonForm>
    </Box>
  );
};
export default SignInForm;
