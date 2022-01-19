import React, { useState } from "react";
import { Paper, Tab, Tabs } from "@material-ui/core";

import { useStyles } from "./style";

import SignInForm from "../../component/SignInForm";
import SignUpForm from "../../component/SignUpForm";

const LoginPage = () => {
  const classes = useStyles();

  const [value, setValue] = useState(0);
  const handleTabs = (e, val) => {
    setValue(val);
  };

  return (
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
        <Tabs value={value} onChange={handleTabs}>
          <Tab label="Вход" />
          <Tab label="Регистрация" />
        </Tabs>

        <TabPanel value={value} index={0}>
          <SignInForm />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SignUpForm />
        </TabPanel>
      </Paper>
    </div>
  );
};

function TabPanel(props) {
  const { children, value, index } = props;

  return <div>{value === index && children}</div>;
}

export default LoginPage;
