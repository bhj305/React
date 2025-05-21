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
            <td>내용1</td>
            <td>{
              // 고차함수 map() 사용하여 줄바꿈이 된 횟수만큼 반복하여 <br>태그로 바꾸기
              props.selectRow.contents.split('\n').map((currVal)=> {
                console.log(currVal);
                return(
                  <>
                    {currVal} <br key={Math.random()} />
                  </>
                );
              })
            }</td>
          </tr>
          <tr>
            <td>내용2</td>
            <td style={{'whiteSpace':'pre-wrap'}}>{props.selectRow.contents}</td>
          </tr>
          <tr>
            <td>내용3</td>
            <td className="contWrap">{props.selectRow.contents}</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}
// 반드시 export 해주기
export default ArticleView;