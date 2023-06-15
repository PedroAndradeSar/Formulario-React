import Input from "../Input";
import "./LoginPage.css";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordError, setPasswordError] = useState();

  const onchangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onchangePassword = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    if (passwordValue.length >= 6) {
      setPasswordError();
    } else {
      setPasswordError("a senha teve conter 6 caracteres");
    }
  };
  const onSubmit = () => {
    console.log(email, password);
  };

  return (
    <div className="conteiner">
      <div className="formConteiner">
        <Input
          label="E-mail"
          name="emailInput"
          value={email}
          onChange={onchangeEmail}
        />
        <Input
          label="Senha"
          type="password"
          name="passwordInput"
          value={password}
          onChange={onchangePassword}
          errorMessage={passwordError}
        />
      </div>

      <button onClick={onSubmit}>Login</button>
      
    </div>
  );
};

export default LoginPage;
