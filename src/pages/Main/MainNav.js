import React from "react";
import "./Main.scss";

function MainHeader() {
  return (
    <div className="navBar">
      <div className="navMainLogo">인스타 로고</div>
      <div id="searchSection">
        <input id="navSearch" type="text" />
        <ul id="searchResult"></ul>
      </div>
      <div className="sideNav">
        <button id="popupBtn">내정보</button>
        <div id="popupSection">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
