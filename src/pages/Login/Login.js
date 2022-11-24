import React from "react";
import "./Login.scss";
import Form from "./LoginBtn";

function Header(props) {
  return <h1 className="title">{props.title}</h1>;
}

function Atag() {
  return <a>비밀번호를 잊으셨나요?</a>;
}

function Login() {
  return (
    <div className="loginBox">
      <Header title="westagram"></Header>
      <Form></Form>
      <Atag></Atag>
    </div>
  );
}

export default Login;
