// import React, { useState } from "react";

// function CommentElement(props) {
//   const [commentLike, setcommentLike] = useState(0);

//   const commentDelete = (e) => {
//     const commentEle = e.target.parentElement;
//     commentEle.remove();
//   };

//   const commentLikeCount = (e) => {
//     e.target.checked
//       ? setcommentLike(commentLike + 1)
//       : setcommentLike(commentLike - 1);
//   };

//   const commentArr = props.commentArr;
//   const commentShow = commentArr.map((e, i) => {
//     // <CommentEle key={i} value={e}></CommentEle>;
//     return (
//       <li key={i}>
//         {/* 로그인 사용자 명 */}
//         {e}
//         {/* <button onClick={deleteBtn}>삭제</button> */}
//         {/* span value값은 데이터 받아서 */}
//         <input type="checkbox" onClick={commentLikeCount} />
//         {/* 서버에 저장한 */}
//         <span>{commentLike}</span>
//         <span> 좋아요</span>
//         <button onClick={commentDelete}>삭제</button>
//       </li>
//     );
//   });
// }

// export default CommentElement;
