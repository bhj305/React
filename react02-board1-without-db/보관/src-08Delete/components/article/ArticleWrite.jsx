// 반드시 import 해주기
import React from "react";

// 쓰기
function ArticleWrite(props){
  return(
    <article>
      <form onSubmit={(event) => {
        event.preventDefault();

        let title = event.target.title.value;
        let writer = event.target.writer.value;
        let contents = event.target.contents.value;

        //부모 컴포넌트에서 props로 전달해준 함수를 호출하여 부모로 데이터 전달
        props.writeAction(title, writer, contents);
      }}>
        
        <table id="boardTable">
          <tbody>
            <tr>
              <td>작성자</td>
              <td><input type="text" name="writer"/></td>
            </tr>
            <tr>
              <td>제목</td>
              <td><input type="text" name="title"/></td>
            </tr>
            <tr>
              <td>내용</td>
              <td><textarea name="contents" rows="3"></textarea></td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="전송" />
      </form>
    </article>
  );
}
// 반드시 export 해주기
export default ArticleWrite;