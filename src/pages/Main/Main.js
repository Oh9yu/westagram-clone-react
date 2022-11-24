import React, { useState } from "react";
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

function Comment(props) {
  const [comment, setComment] = useState("");

  return (
    <>
      <input
        id="commentInput"
        type="text"
        placeholder={props.commentHolder}
        value={comment}
      />
      <button id="commentBtn">게시</button>
    </>
  );
}
function FeedSection(props) {
  return (
    <div className="feedSection">
      <article className="feed">
        <div className="feedUserInfo">myname</div>
        <div className="feedImg"></div>
        <div className="feedNav">
          <input type="checkbox" id="likeCheck" />
          <input type="checkbox" id="commentOpen" />
        </div>
        <p className="likeCountSection">
          <span id="likeResult">0</span> 명이 좋아합니다
        </p>
        <div className="feedContents">안녕하세요</div>
        <p className="countTime">50분전</p>
        <div id="commentSection">
          <ul id="commentList"></ul>
          <span id="commentUserInfo">user1</span>
          <Comment commentHolder="댓글입력"></Comment>
        </div>
      </article>
    </div>
  );
}

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

function Main() {
  return (
    <>
      <MainHeader></MainHeader>
      <div className="main">
        <FeedSection></FeedSection>
        <Mainright></Mainright>
      </div>
    </>
  );
}
export default Main;
