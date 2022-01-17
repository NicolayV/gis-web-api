import React, { useContext, useState } from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";

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
