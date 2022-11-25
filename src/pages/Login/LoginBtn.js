import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

function FormInput(props) {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    userID: "",
    userPW: "",
  });

  console.log(inputValue);
  const { userID, userPW } = inputValue;

  const idChk = userID.includes("@") && userID.length > 4;
  const pwChk = userPW.length > 4;

  const loginChk = idChk && pwChk ? false : true;

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
    console.log(inputValue);
  };

  return (
    <form className="login">
      {/* {
      Object.entries(inputValue).map(([key, value]) => <input type="text" name={key} value={value}></input>)
    } */}

      <input
        type="text"
        name="userID"
        placeholder={props.idHolder}
        value={userID}
        onChange={onChange}
      />
      <input
        type="password"
        name="userPW"
        placeholder={props.pwHolder}
        value={userPW}
        onChange={onChange}
      />
      <button
        id="loginBtn"
        disabled={loginChk}
        onClick={() => {
          navigate("/main");
        }}
      >
        {props.btnName}
      </button>
    </form>
  );
}

function Form() {
  return (
    <FormInput
      idHolder="이메일을 입력하세요"
      pwHolder="비밀번호"
      btnName="로그인"
    ></FormInput>
  );
}

export default Form;
