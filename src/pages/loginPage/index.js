import React from "react";

import { Paper, Box } from "@mui/material";
import StyledTabs from "../../component/UI/Tabs";
import TypographyLogo from "../../component/UI/Typography";

import styles from "./style";
import SignInForm from "../../component/SignInForm";
import SignUpForm from "../../component/SignUpForm";

const LoginPage = () => {
  return (
    <Box sx={styles.loginWrapper}>
      <TypographyLogo title="AEROSPACE" subTitle="AGRO" />

      <Paper sx={styles.layout}>
        <StyledTabs
          tabOneLabel="Вход"
          tabOne={<SignInForm />}
          tabTwoLabel="Регистрация"
          tabTwo={<SignUpForm />}
        />
      </Paper>
    </Box>
  );
};

export default LoginPage;
