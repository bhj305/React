import { Link } from "react-router-dom";

function Write(props){
  // state와 관련된 데이터와 함수를 모두 받아오기
  const boardData = props.boardData;
  const setBoardData = props.setBoardData;
  const nextNo = props.nextNo;
  const setNextNo = props.setNextNo;
  const navigate = props.navigate;
  const nowDate = props.nowDate;

  return(
    <>
      <header>
        <h2>게시판 - 작성</h2>
      </header>
      <nav>
        <Link to="/list">목록</Link>
      </nav>
      <article>
        <form onSubmit={
          (event) => {
            event.preventDefault();

            let w = event.target.writer.value;
            let t = event.target.title.value;
            let c = event.target.contents.value;

            let addBoardData = { no:nextNo, writer:w, title:t, contents:c, date:nowDate() };

            let copyBoardData = [...boardData];
            copyBoardData.push(addBoardData);
            setBoardData(copyBoardData);
            setNextNo(nextNo+1);
            navigate("/list");
          }
        }>
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
          <input type="submit" value="전송"/>
        </form>
      </article>
    </>
  );
}

export default Write;