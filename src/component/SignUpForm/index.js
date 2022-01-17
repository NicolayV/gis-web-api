import React, { useContext, useState } from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";

import { useStyles } from "./style";

import FormInput from "../UI/Input";
import ButtonForm from "../UI/Button";
import useInput from "../../hooks/useInput";
import { AuthContext } from "../../context";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const classes = useStyles();
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
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <FormInput
        // inputType="text"
        loginName={loginName}
        onChange={(e) => loginName.onChange(e)}
        onBlur={(e) => loginName.onBlur(e)}
        value={loginName.value}
      />

      <FormInput
        inputType="email"
        email={email}
        onChange={(e) => email.onChange(e)}
        onBlur={(e) => email.onBlur(e)}
        value={email.value}
      />

      <FormInput
        inputType="password"
        password={password}
        onChange={(e) => password.onChange(e)}
        onBlur={(e) => password.onBlur(e)}
        value={password.value}
      />

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
