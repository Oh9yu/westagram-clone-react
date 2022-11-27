import React from "react";
import { useState } from "react";
// import CommentEle from "./CommentLi.js";

function CommentActive(props) {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  // const [commentListLi, setcommetListLi] = useState(commentList);
  const commentShow = commentList.map((e, i) => {
    // <CommentEle key={i} value={e}></CommentEle>;
    return <li key={i}>{e}</li>;
  });
  //댓글입력
  const inputComment = (e) => {
    setComment(e.target.value);
    // console.log(comment);
  };

  const addComment = (e) => {
    setCommentList(commentList.concat(comment));
    setComment("");
  };
  console.log(commentList);
  return (
    <div id="commentSection">
      <ul className="commentList">{commentShow}</ul>
      <span id="commentUserInfo">user1</span>
      <input
        id="commentInput"
        type="text"
        placeholder={props.commentHolder}
        onChange={inputComment}
        value={comment}
      />
      <button id="commentBtn" onClick={addComment}>
        게시
      </button>
    </div>
  );
}

export default CommentActive;
