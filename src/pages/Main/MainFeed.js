import React from "react";
import "./Main.scss";
import Comment from "./Comment";

function FeedSection() {
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

        <Comment commentHolder="댓글을 입력하세요"></Comment>
      </article>
    </div>
  );
}

export default FeedSection;
