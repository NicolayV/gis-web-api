import React, { useContext, useState } from "react";
import { Paper, Tab, Tabs, Checkbox, Link, Button } from "@material-ui/core";

import { useStyles } from "./style";

import InputEmail from "../../component/UI/textFieldEmail/textFieldEmail";
import InputPassword from "../../component/UI/textFieldPassword/textFieldPassword";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";
import useInput from "../../hooks/useInput";

const LoginPage = () => {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);
  const handleChange = (event, newValue) => setSelectedTab(newValue);

  const navigate = useNavigate();
  const { setIsAuth } = useContext(AuthContext);
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
    <>
      <div className={classes.loginWrapper}>
        <h1 className={classes.h1Title}>AEROSPACE</h1>
        <h3 className={classes.h3Title}>AGRO</h3>

        <Paper className={classes.layout}>
          <form className={classes.form} onSubmit={onSubmitHandler}>
            <Tabs
              className={classes.tabs}
              value={selectedTab}
              onChange={handleChange}
            >
              <Tab className={classes.signIn} label="Вход" />
              <Tab className={classes.signUp} label="Регистрация" />
            </Tabs>

            <InputEmail
              className={classes.inputEmail}
              onChange={(e) => email.onChange(e)}
              onBlur={(e) => email.onBlur(e)}
              value={email.value}
            />
            <InputPassword
              className={classes.inputPassword}
              onChange={(e) => password.onChange(e)}
              onBlur={(e) => password.onBlur(e)}
              value={password.value}
            />

            <Checkbox
              className={classes.checkbox}
              checked={checked}
              onChange={(prev) => setChecked(!checked)}
            />

            <Button
              className={classes.button}
              variant="outlined"
              // disabled={!email.inputValid || !password.inputValid}
              type="submit"
            >
              Войти
            </Button>
            <Link className={classes.link}>Забыли пароль?</Link>
          </form>
        </Paper>

        <span className={classes.aaa}>
          {email.isDirty && email.isEmpty && (
            <div>Поле не может быть пустым</div>
          )}
          {email.isDirty && email.minLengthError && (
            <div>Не корректная длина</div>
          )}
          {email.isDirty && email.emailError && <div>Не корректный емейл</div>}
          {password.isDirty && password.isEmpty && (
            <div>Пароль не может быть пустым</div>
          )}
          {password.isDirty && password.maxLengthError && (
            <div>Слишком длинный пароль</div>
          )}
          {password.isDirty && password.minLengthError && (
            <div>Не корректная длина пароля</div>
          )}
        </span>
      </div>
    </>
  );
};
export default LoginPage;
