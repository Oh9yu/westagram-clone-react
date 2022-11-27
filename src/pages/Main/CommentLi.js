import React from "react";

function CommentElement(props) {
  return (
    <li>
      {/* 로그인 사용자 명 */}
      {props.commentList}
      {/* <button onClick={deleteBtn}>삭제</button> */}
      {/* span value값은 데이터 받아서 */}
      <input type="checkbox" onClick={props.likeFunc} />
      {/* 서버에 저장한 */}
      <span>{props.liekResult}</span>
      <span> 좋아요</span>
      <button onClick={props.deleteFunc}>삭제</button>
    </li>
  );
}

export default CommentElement;
