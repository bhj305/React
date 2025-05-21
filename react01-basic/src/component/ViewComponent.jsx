import React from "react"; // 컴포넌트 모듈화를 위해 제일 먼저 필요한 React 임포트 구문

function ViewComponent(props){
  return (
    <>
      <header>
        <h2>게시판 - 읽기</h2>
      </header>
      <nav>
        <a href="/" onClick={(event)=> {
          event.preventDefault();
          props.changeMode('list');
        }}>목록</a> &nbsp;&nbsp;
        <a href="/" onClick={(e) => {
          alert('수정');
          e.preventDefault();
        }}>수정</a> &nbsp;&nbsp;
        <a href="/" onClick={(e) => {
          alert('삭제');
          e.preventDefault();
        }}>삭제</a>
      </nav>
      <article>
        <table id="boardTable">
          <tbody>
            <tr>
              <td className="cen">작성자</td>
              <td>성유겸</td>
            </tr>
            <tr>
              <td className="cen">제목</td>
              <td>오늘은 React 공부하는 날</td>
            </tr>
            <tr>
              <td className="cen">날짜</td>
              <td>2025-05-20</td>
            </tr>
            <tr>
              <td className="cen">내용</td>
              <td>열심히 해봅시도오<br/>열공합시도오</td>
            </tr>
          </tbody>
        </table>
      </article>
    </>
  );
}

export default ViewComponent;