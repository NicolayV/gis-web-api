import React, { useContext } from "react";

import styles from "./style";

import FormInput from "../UI/Input";
import ButtonForm from "../UI/Button";
import useInput from "../../hooks/useInput";
import { AuthContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { Box, FormHelperText } from "@mui/material";

const SignUpForm = () => {
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
    <Box component="form" sx={styles.form} onSubmit={onSubmitHandler}>
      <FormInput
        onChange={(e) => loginName.onChange(e)}
        onBlur={(e) => loginName.onBlur(e)}
        value={loginName.value}
      />
      <FormHelperText error>{loginName.errorMessages}</FormHelperText>

      <FormInput
        inputType="email"
        onChange={(e) => email.onChange(e)}
        onBlur={(e) => email.onBlur(e)}
        value={email.value}
      />
      <FormHelperText error>{email.errorMessages}</FormHelperText>

      <FormInput
        inputType="password"
        onChange={(e) => password.onChange(e)}
        onBlur={(e) => password.onBlur(e)}
        value={password.value}
      />
      <FormHelperText error>{password.errorMessages}</FormHelperText>

      <ButtonForm
        sx={styles.button}
        variant="outlined"
        type="submit"
        disabled={
          !loginName.inputValid || !email.inputValid || !password.inputValid
        }
      >
        Регистрация
      </ButtonForm>
    </Box>
  );
};
export default SignUpForm;
