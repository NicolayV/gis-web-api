import React, { useState } from "react";

import styles from "./style";

import SignInForm from "../../component/SignInForm";
import SignUpForm from "../../component/SignUpForm";
import { Paper, Tab, Tabs, Box, Typography } from "@mui/material";

const LoginPage = () => {
  const [value, setValue] = useState(0);
  const handleTabs = (e, val) => {
    setValue(val);
  };

  const TabPanel = ({ children, value, index }) => (
    <div>{value === index && children}</div>
  );

  return (
    <Box sx={styles.loginWrapper}>
      <Typography sx={styles.spanLogo} display="flex" component="span">
        <Typography
          sx={styles.title}
          variant="h3"
          component="span"
          gutterBottom
        >
          AEROSPACE
        </Typography>
        <Typography
          sx={styles.subTitle}
          variant="h5"
          gutterBottom
          component="span"
        >
          AGRO
        </Typography>
      </Typography>

      <Paper sx={styles.layout}>
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
    </Box>
  );
};

export default LoginPage;
