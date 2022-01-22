import React, { useContext } from "react";

import styles from "./style";

import FormInput from "../UI/Input";
import ButtonForm from "../UI/Button";
import useInput from "../../hooks/useInput";
import { AuthContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { FormHelperText } from "@mui/material";

const SignUpForm = () => {
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const loginName = useInput("", { isEmpty: true, minLength: 3, maxLength: 8 });
  const email = useInput("", { isEmpty: true, minLength: 3, isEmail: true });
  const password = useInput("", { isEmpty: true, minLength: 3, maxLength: 8 });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(loginName.value, email.value, password.value);
    setIsAuth(true);
    localStorage.setItem("auth", "true");
    navigate("/gismap");
  };

  return (
    <form sx={styles.form} onSubmit={onSubmitHandler}>
      <FormInput
        // inputType="text"
        onChange={(e) => loginName.onChange(e)}
        onBlur={(e) => loginName.onBlur(e)}
        value={loginName.value}
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

      <ButtonForm
        inputType="submit"
        disabled={
          !loginName.inputValid || !email.inputValid || !password.inputValid
        }
      >
        Регистрация
      </ButtonForm>
    </form>
  );
};
export default SignUpForm;
