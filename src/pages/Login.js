import React, { useState } from "react";
import {
  ButtonGroup,
  Paper,
  Tab,
  Tabs,
  TextField,
  Checkbox,
  Link,
} from "@material-ui/core";

import Button from "@material-ui/core/Button";
import { useStyles } from "./style";

const Login = () => {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);
  const handleChange = (event, newValue) => setSelectedTab(newValue);

  return (
    <div className={classes.root}>
      <Paper className={classes.layout}>
        <Tabs
          //   className={classes.tabs}
          value={selectedTab}
          onChange={handleChange}
        >
          <Tab className={classes.signIn} label="Вход" />
          <Tab className={classes.signUp} label="Регистрация" />
        </Tabs>
        <TextField
          className={classes.inputEmail}
          //   margin="normal"
          //   required
          //   fullWidth
          //   id="email"
          //   label="Email Address"
          //   name="email"
          //   autoComplete="email"
          //   autoFocus
        />
        <TextField
          className={classes.inputPassword}
          //   margin="normal"
          //   required
          //   fullWidth
          //   name="password"
          //   label="Password"
          //   type="password"
          //   id="password"
          //   autoComplete="current-password"
        />
        <Checkbox
          className={classes.checkbox}
          inputProps={{ "aria-label": "disabled checkbox" }}
        />

        <ButtonGroup
          className={classes.buttonGroup}
          orientation="vertical"
          //   color="primary"
          //   aria-label="vertical outlined primary button group"
        >
          <Button className={classes.button}>One</Button>
          <Link className={classes.buttonLink}>Забыли пароль?</Link>
        </ButtonGroup>
      </Paper>
    </div>
  );
};
export default Login;
