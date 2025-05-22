import { Link, useParams } from "react-router-dom";

function View(props){
  var params = useParams();
  console.log("파라미터", params.no);

  let vi = props.boardData.reduce((prev, curr) => {
    if(curr.no === Number(params.no)){
      prev = curr; // curr값을 prev에 넣기 
    }
    return prev; // prev 반환
  }, {}); // 초기값 {} 빈값 부여 

  return(<>
    <header>
      <h2>게시판 - 읽기</h2>
    </header>
    <nav>
      <Link to="/list">목록</Link> &nbsp;
      <Link to="/edit">수정</Link> &nbsp;
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
            <td>{vi.writer}</td>
          </tr>
          <tr>
            <td>제목</td>
            <td>{vi.title}</td>
          </tr>
          <tr>
            <td>날짜</td>
            <td>{vi.date}</td>
          </tr>
          <tr>
            <td>내용</td>
            <td>{vi.contents}</td>
          </tr>
        </tbody>
      </table>
    </article>
  </>);
}

export default View;