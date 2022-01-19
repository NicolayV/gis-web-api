import React, { useContext, useState } from "react";
import { Checkbox, FormControlLabel, FormHelperText } from "@material-ui/core";

import { useStyles } from "./style";

import FormInput from "../UI/Input";
import ButtonForm from "../UI/Button";
import useInput from "../../hooks/useInput";
import { AuthContext } from "../../context";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const classes = useStyles();
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const email = useInput("", { isEmpty: true, minLength: 3, isEmail: true });
  const password = useInput("", { isEmpty: true, minLength: 3, maxLength: 8 });

  const [checked, setChecked] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(email.value, password.value, checked);
    setIsAuth(true);
    localStorage.setItem("auth", "true");
    navigate("/gismap");
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <FormInput
        inputType="email"
        onChange={(e) => email.onChange(e)}
        onBlur={(e) => email.onBlur(e)}
        value={email.value}
      />

      <FormHelperText error>
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
        className={classes.checkbox}
        control={
          <Checkbox
            checked={checked}
            onChange={(prev) => setChecked(!checked)}
          />
        }
        label="Запомни меня"
      />

      <ButtonForm
        inputType="submit"
        disabled={!email.inputValid || !password.inputValid}
      >
        Войти
      </ButtonForm>
      <ButtonForm inputType="link">Забыли пароль?</ButtonForm>
    </form>
  );
};
export default SignInForm;
