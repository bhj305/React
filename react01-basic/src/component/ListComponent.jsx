import React from "react"; // 컴포넌트 모듈화를 위해 제일 먼저 필요한 React 임포트 구문

function ListComponent(props){
  return (
    // JSX를 표현할때는 최상위 엘리먼트가 반드시 하나 있어야 함. <></> 프레그먼트
    <>
    <header>
      <h2>게시판 - 목록</h2>
    </header>
    <nav>
      <a href="/" onClick={(event) => {
        event.preventDefault();
        // 부모에서 전달해준 함수를 호출함으로써 자식은 부모쪽으로 데이터를 전달할 수 있음
        props.changeMode('write');
      }}>글쓰기</a>
    </nav>
    <article>
      <table id="boardTable">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Writer</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="cen">1</td>
            <td>
              <a href="/" onClick={(event)=> {
                event.preventDefault();
                props.changeMode('view');
              }}>오늘은 React 공부하는 날</a>
            </td>
            <td className="cen">홍길동</td>
            <td className="cen">2025-05-20</td>
          </tr>
        </tbody>
      </table>
    </article>
    </>
  );
}

export default ListComponent;