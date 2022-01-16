import React, { useState } from "react";
import {
  Paper,
  Tab,
  Tabs,
  TextField,
  Checkbox,
  Link,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { MailTwoTone, VpnKey } from "@material-ui/icons";

import { useStyles } from "./style";

const LoginPage = () => {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);
  const handleChange = (event, newValue) => setSelectedTab(newValue);

  return (
    <div className={classes.loginWrapper}>
      <h1 className={classes.h1Title}>AEROSPACE</h1>
      <h3 className={classes.h3Title}>AGRO</h3>
      <Paper className={classes.layout}>
        <Tabs
          className={classes.tabs}
          value={selectedTab}
          onChange={handleChange}
        >
          <Tab className={classes.signIn} label="Вход" />
          <Tab className={classes.signUp} label="Регистрация" />
        </Tabs>
        <TextField
          className={classes.inputEmail}
          name="email"
          id="email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailTwoTone />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          className={classes.inputPassword}
          name="password"
          id="password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <VpnKey />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end">показать</IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Checkbox className={classes.checkbox} />

        <Button className={classes.button} variant="outlined">
          Войти
        </Button>
        <Link className={classes.link}>Забыли пароль?</Link>
      </Paper>
    </div>
  );
};
export default LoginPage;
