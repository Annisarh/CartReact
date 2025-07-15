import React, { useEffect, useRef, useState } from "react";
import LabelInput from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";
import { login } from "../../services/authService";

const FormLogin = () => {
  const [loginFail, setLoginFail] = useState("");

  //focus untuk username
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFail(res.response.data);
        // console.log(res.response.data);
      }
    });
  };
  return (
    <form onSubmit={handleLogin}>
      <LabelInput
        label="Username"
        htmlFor="username"
        type="text"
        name="username"
        id="username"
        placeholder="Annisa Rahmadani"
        ref={inputRef}
      />
      <LabelInput
        label="Password"
        htmlFor="password"
        type="password"
        name="password"
        id="password"
        placeholder="******"
      />
      {loginFail && <p className="text-red-500 mb-2">{loginFail}</p>}
      <Button text="Login" classname="text-center w-full" type="submit" />
    </form>
  );
};

export default FormLogin;
