import React, { useContext, useState } from "react";
import { AuthContext } from "../context";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
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
    <div>
      <form onSubmit={onSubmitHandler}>
        <h1>Valid form</h1>

        {email.isDirty && email.isEmpty && <div>Поле не может быть пустым</div>}
        {email.isDirty && email.minLengthError && (
          <div>Не корректная длина</div>
        )}
        {email.isDirty && email.emailError && <div>Не корректный емейл</div>}

        <input
          onChange={(e) => email.onChange(e)}
          onBlur={(e) => email.onBlur(e)}
          value={email.value}
          type="text"
          placeholder="E-mail"
        />
        <hr />

        {password.isDirty && password.isEmpty && (
          <div>Пароль не может быть пустым</div>
        )}
        {password.isDirty && password.maxLengthError && (
          <div>Слишком длинный пароль</div>
        )}
        {password.isDirty && password.minLengthError && (
          <div>Не корректная длина пароля</div>
        )}

        <input
          onChange={(e) => password.onChange(e)}
          onBlur={(e) => password.onBlur(e)}
          value={password.value}
          type="text"
          placeholder="Password"
        />
        <hr />
        <input
          type="checkbox"
          checked={checked}
          onChange={(prev) => setChecked(!checked)}
        />
        <hr />
        <button
          disabled={!email.inputValid || !password.inputValid}
          type="submit"
        >
          Войти
        </button>
        <hr />
        <a href="#">Забыли пароль?</a>
      </form>
    </div>
  );
};
export default LoginForm;
