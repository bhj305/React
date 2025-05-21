// 반드시 import 해주기
import React from "react";

// 읽기
function ArticleView(props){
  return(
    <article>
      <table id="boardTable">
        <col width = '30%' /><col witdh="*" />
        <tbody>
          <tr>
            <td>작성자</td>
            <td>성유겸</td>
          </tr>
          <tr>
            <td>제목</td>
            <td>오늘은 React 공부하는 날</td>
          </tr>
          <tr>
            <td>날짜</td>
            <td>2025-05-20</td>
          </tr>
          <tr>
            <td>내용</td>
            <td>열심히 해봅시도오<br/>열공합시도오</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}
// 반드시 export 해주기
export default ArticleView;