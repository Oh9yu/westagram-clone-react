import React from "react";
import "./Main.scss";

function Mainheader() {
  <div className="navBar">
    <div className="navMainLogo">인스타 로고</div>
    <div id="searchSection">
      <input id="navSearch" type="text" />
      <ul id="searchResult"></ul>
    </div>
  </div>;
}

function Main() {
  return (
    <>
      <Mainheader></Mainheader>
    </>
  );
}

export default Main;
