import React, { useContext, useState } from "react";
import {
  Paper,
  Tab,
  Tabs,
  Checkbox,
  Link,
  Button,
  FormControlLabel,
} from "@material-ui/core";

import { useStyles } from "./style";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";
import useInput from "../../hooks/useInput";
import FormInput from "../../component/UI/Input";

const LoginPage = () => {
  const classes = useStyles();
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState(0);
  const handleChange = (event, newValue) => setSelectedTab(newValue);

  const email = useInput("", { isEmpty: true, minLength: 3, isEmail: true });
  const password = useInput("", { isEmpty: true, minLength: 3, maxLength: 8 });

  const [checked, setChecked] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(email.value, password.value, checked);
    //! setIsAuth(true);
    //! localStorage.setItem("auth", "true");
    //! navigate("/gismap");
  };
  return (
    <>
      <div className={classes.loginWrapper}>
        <span
          style={{
            flexDirection: "column",
            display: "flex",
          }}
        >
          <h1 className={classes.h1Title}>AEROSPACE</h1>
          <h3 className={classes.h3Title}>AGRO</h3>
        </span>

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

            <FormInput
              inputType="email"
              email={email}
              password={password}
              onChange={(e) => email.onChange(e)}
              onBlur={(e) => email.onBlur(e)}
              value={email.value}
            />

            <FormInput
              inputType="password"
              email={email}
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

            <Button
              className={classes.button}
              variant="outlined"
              disabled={!email.inputValid || !password.inputValid}
              type="submit"
            >
              Войти
            </Button>
            <Link className={classes.link}>Забыли пароль?</Link>
          </form>
        </Paper>
      </div>
    </>
  );
};

export default LoginPage;
