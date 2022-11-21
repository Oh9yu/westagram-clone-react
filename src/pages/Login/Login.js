import React from "react";
import "./Login.scss";

function Header() {
  return <h1 className="title">westagram</h1>;
}

function Form() {
  return (
    <form className="login" action="">
      <input type="text" placeholder="이메일을 입력하세요" />
      <input type="text" placeholder="비밀번호" />
      <button id="loginBtn" type="submit">
        로그인
      </button>
    </form>
  );
}

function Atag() {
  return <a href="">비밀번호를 잊으셨나요?</a>;
}

function Login() {
  return (
    <div className="loginBox">
      <Header></Header>
      <Form></Form>
      <Atag></Atag>
    </div>
  );
}

export default Login;
