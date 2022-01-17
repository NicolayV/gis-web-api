import React, { useState } from "react";
import { Paper, Tab, Tabs, withStyles } from "@material-ui/core";

import { useStyles } from "./style";

import SignInForm from "../../component/SignInForm";
import SignUpForm from "../../component/SignUpForm";

const LoginPage = () => {
  const classes = useStyles();

  const [selectedTab, setSelectedTab] = useState(0);
  const handleChange = (event, newValue) => setSelectedTab(newValue);

  return (
    <>
      <div className={classes.loginWrapper}>
        <span
          style={{
            flexDirection: "column",
            display: "flex",
          }}
        >
          <h1 className={classes.title}>AEROSPACE</h1>
          <h3 className={classes.subTitle}>AGRO</h3>
        </span>

        <Paper className={classes.layout}>
          <Tabs
            className={classes.tabs}
            value={selectedTab}
            onChange={handleChange}
          >
            <Tab className={classes.signIn} label="Вход" />
            <Tab className={classes.signUp} label="Регистрация" />
          </Tabs>

          {!!selectedTab ? <SignUpForm /> : <SignInForm />}
        </Paper>
      </div>
    </>
  );
};

export default LoginPage;
