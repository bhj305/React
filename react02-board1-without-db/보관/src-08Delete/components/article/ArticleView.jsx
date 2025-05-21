// 반드시 import 해주기
import React from "react";

// 읽기
function ArticleView(props){
  console.log("선택한 게시물: ", props.selectRow);
  return(
    <article>
      <table id="boardTable">
        <colgroup>
          <col width = '30%' /><col witdh="*" />
        </colgroup>
        <tbody>
          <tr>
            <td>작성자</td>
            <td>{props.selectRow.writer}</td>
          </tr>
          <tr>
            <td>제목</td>
            <td>{props.selectRow.title}</td>
          </tr>
          <tr>
            <td>날짜</td>
            <td>{props.selectRow.date}</td>
          </tr>
          <tr>
            <td>내용</td>
            <td>{props.selectRow.contents}</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}
// 반드시 export 해주기
export default ArticleView;