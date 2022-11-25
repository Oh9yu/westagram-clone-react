import React from "react";
import "./Main.scss";

function Mainright() {
  return (
    <div className="mainRight">
      <div className="userSection">
        <div className="userInfo"></div>
      </div>
      <div className="mainRightTop">
        <div className="storyHeader">스토리</div>
        <div className="storyListSection">
          <div className="storyList">닉네임</div>
          <div className="storyList">닉네임</div>
          <div className="storyList">닉네임</div>
        </div>
      </div>
      <div className="mainRightBottom">
        <div className="recommendHeader">회원님을 위한 추천</div>
        <div className="recommendList"></div>
        <div className="recommendList"></div>
        <div className="recommendList"></div>
      </div>
    </div>
  );
}

export default Mainright;
