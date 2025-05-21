// 반드시 import 해주기
import React, { useState } from "react";

// 쓰기
function ArticleEdit(props){
  const [title, setTitle] = useState(props.selectRow.title);
  const [writer, setWriter] = useState(props.selectRow.writer);
  const [contents, setContents] = useState(props.selectRow.contents);

  return(
    <article>
      <form onSubmit={(event) => {
        event.preventDefault();

        let title = event.target.title.value;
        let writer = event.target.writer.value;
        let contents = event.target.contents.value;

        // console.log('ArticleEdit 컴포: ' + title, writer, contents)
        //부모 컴포넌트에서 props로 전달해준 함수를 호출하여 부모로 데이터 전달
        props.editAction(title, writer, contents);
      }}>
        
        <table id="boardTable">
          <tbody>
            <tr>
              <td>작성자</td>
              <td><input type="text" name="writer" value={writer} onChange={(event)=>{
                setWriter(event.target.value);
              }}/></td>
            </tr>
            <tr>
              <td>제목</td>
              <td><input type="text" name="title" value={title} onChange={(event)=>{
                setTitle(event.target.value);
              }} /></td>
            </tr>
            <tr>
              <td>내용</td>
              <td><textarea name="contents" cols='22' rows="3" value={contents} onChange={(event)=> {
                setContents(event.target.value);
              }} ></textarea></td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="수정하기"></input>
      </form>
    </article>
  );
}
// 반드시 export 해주기
export default ArticleEdit;