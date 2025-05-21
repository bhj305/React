// 반드시 import 해주기
import React from "react";

// 목록
function ArticleList(props){
  const lists = [];
  for (let i = 0; i < props.boardData.length; i++) {
    let row = props.boardData[i];
    lists.push(
      <tr key={ row.no}>
        <td className="cen">{row.no}</td>
        <td><a href={'/read/'+ row.no } onClick={(event) => {
          event.preventDefault();
          props.onChangeMode(row.no); // 각 게시물의 일련번호를 받기
        }}>{row.title}</a></td>
        <td className="cen">{row.writer}</td>
        <td className="cen">{row.date}</td>
      </tr>
    );
  }
  return(
    <article>
      <table id="boardTable">
        <thead>
          <tr>
            <th>No</th>
            <th>제목</th>
            <th>작성자</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
          { lists }
        </tbody>
      </table>
    </article>
  );
}
// 반드시 export 해주기
export default ArticleList;