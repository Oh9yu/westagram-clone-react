import React from "react";
import { useState } from "react";

function CommentActive(props) {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  // const [commentListLi, setcommetListLi] = useState(commentList);

  //댓글입력
  const inputComment = (e) => {
    setComment(e.target.value);
    // console.log(comment);
  };

  // const commentPlus = () =>{
  //   setCommentList()
  // }
  // const comLi = () => {
  //   setcommetListLi(
  //     commentList.map((ele) => {
  //       <li>{ele}</li>;
  //     })
  //   );
  // };
  // .map((e) => {
  //         console.log(e);
  //       }
  const addComment = (e) => {
    setCommentList(commentList.concat(comment));
    setComment("");
  };
  console.log(commentList);
  return (
    <div id="commentSection">
      <ul className="commentList">{commentList}</ul>
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
