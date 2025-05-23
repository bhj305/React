import { Link, useParams } from "react-router-dom";

function View(props){
  // useParams: 컴포넌트를 라우터 처리할 때 중첩된 구조내에서 :no 와 같이 사용된 파라미터의 값을 얻어올 수 있는 hook
  var params = useParams();
  console.log("파라미터", params.no);

  // reduce() 함수는 배열의 크기만큼 반복하여 조건에 맞는 하나의 값을 반환함.
  let vi = props.boardData.reduce((prev, curr) => {
    if(curr.no === Number(params.no)){
      prev = curr; // curr값을 prev에 넣기 
    }
    return prev; // prev 반환
  }, {}); // 초기값 {} 빈값 부여 

  let readNum = Number(params.no);
  let prevNum = 0, nextNum =0;

  if(readNum-1 === 0 ){
    prevNum = 1;
  } else {
    prevNum = Number(params.no) -1;
  }

  nextNum = readNum + 1;
  let isNextNum = props.boardData.reduce((prev, curr) => {
    if(curr.no === nextNum){
      prev = true;
    }
    return prev;
  }, false); // 초기값은 false 로 부여 

  if(isNextNum === false){
    nextNum = readNum;
  }

  const goPrev = () => {
    if(readNum-1 === 0){
      
      prevNum = 1;
      alert("이전 페이지가 없습니다.");
    }
    else {
      prevNum = Number(params.no) - 1;
    }
    console.log('prevNum', prevNum);
    props.navigate("/view/" + prevNum); // 이전페이지로 이동
  }

  const goNext = () => {
    nextNum = readNum + 1;

    let isNextNum = props.boardData.reduce((prev, curr) => {
      if(curr.no === nextNum){
        prev = true;
      }
      return prev;
    }, false); // 초기값은 false 로 부여 

    if(isNextNum === false){
      nextNum = readNum;
      alert('다음 페이지가 없습니다.');
    }
    console.log('nextNum', nextNum);
    props.navigate("/view/" + nextNum); // 이전페이지로 이동

  }


  return(<>
    <header>
      <h2>게시판 - 읽기</h2>
    </header>
    <nav>
      <Link to="/list">목록</Link> &nbsp;
      <Link to={"/edit/" + params.no}>수정</Link> &nbsp;

      <Link to="/delete" onClick={(e)=>{
        e.preventDefault();
        if(window.confirm('삭제하시겠습니까?')){
          let newBoardData = props.boardData.filter((curr)=>{
            if(Number(params.no) !== curr.no){
              return curr;
            }
          });
          console.log('삭제결과', newBoardData);
          props.setBoardData(newBoardData);
          props.navigate('/list');
        }
      }}>삭제</Link>
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
      {/* <Link to = { "/view/" + prevNum}>이전글1</Link>
      <Link to = { "/view/" + nextNum}>다음글1</Link> */}
      {/* onClick을 통해 goPrev(), goNext() 사용하기 */}
      <Link onClick={(e) => {
        e.preventDefault(); // 이거 안해주면 걍 자동으로 이전글없음 뜸 ;;; 이벤트 멈춰주는 효과
        goPrev();
      }}>이전글1</Link>
      <Link onClick={(e) =>{
        e.preventDefault();
        goNext();
      }}>다음글1</Link>



      <a href="/" onClick={(e) => {
        e.preventDefault();
        goPrev();
      }}>이전글2</a>
      <a href="/" onClick={(e) => {
        e.preventDefault();
        goNext();
      }}>다음글2</a>
      
    </article>
  </>);
}

export default View;