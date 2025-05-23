import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function View(props){
  let params = useParams();
  console.log("idx", params.idx);

  let [boardData, setBoardData] = useState({});
  let requestUrl = "http://nakja.co.kr/APIs/php7/boardViewJSON.php"
  let parameter = "apikey=8fc3a907036472c24a0af58af56bb683&tname=nboard_news&idx="+params.idx;

  useEffect (function (){
    fetch(requestUrl+"?"+parameter)
      .then((result) => {
        return result.json();
      })
      .then((json) => {
        console.log(json);
        setBoardData(json);
      });
    return () => {
      console.log('useEffect 실행 ==> 컴포넌트 언마운트');
    }
  }, []);


  return(<>
    <header>
      <h2>게시판 - 읽기</h2>
    </header>
    <nav>
      <Link to="/list">목록</Link> &nbsp;
      <Link to={"/edit"}>수정</Link> &nbsp;
      <Link to="/delete">삭제</Link>
    </nav>
    <article>
      <table id="boardTable">
        <colgroup>
          <col width="20%"/><col width='*' />
        </colgroup>
        <tbody>
          <tr>
            <td>작성자</td>
            <td>{boardData.name}</td>
          </tr>
          <tr>
            <td>제목</td>
            <td>{boardData.subject}</td>
          </tr>
          <tr>
            <td>날짜</td>
            <td>{boardData.regdate}</td>
          </tr>
          <tr>
            <td>내용</td>
            <td dangerouslySetInnerHTML={{__html: boardData.content}}></td>
          </tr>
        </tbody>
      </table>
    </article>
  </>);
}

export default View;