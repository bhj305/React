import { Link } from "react-router-dom";

function List(props) {
  // props로 전달된 객체형 배열을 map 함수를 통해 반복해서 목록 생성.
  // 첫번쨰 매개변수로 현재 루프의 객체가 전달됨. (idx의 경우 사용되지 않으므로 필요없다면 삭제해도 무방하다)
  const lists = props.boardData.map((row, idx) => {
    return (
      <tr key={row.no}>
        <td className="cen">{row.no}</td>
        {/* 열람을 위한 링크는 "/view/일련번호"와 같은 형태를 사용함. */}
        <td><Link to= {'/view/'+ row.no}>{row.title}</Link></td>
        <td className="cen">{row.writer}</td>
        <td className="cen">{row.date}</td>
      </tr>
    );
  });
  return (
    <>
    <header>
    <h2>게시판 - 목록</h2>
  </header>
  <nav>
    <Link to="/write">글쓰기</Link>
  </nav>
  <article>
    <table id="boardTable">
      <thead>
        <tr>
          <th>No</th>
          <th>제목</th>
          <th>작성자</th>
          <th>날짜</th>
        </tr>
      </thead>
      <tbody>
        {/* map 함수는 반복을 위한 배열과 동일한 크기의 새로운 배열을 생성하므로 여기서 목록을 출력할 수 있음. 
        
        map()은 주어진 콜백 함수를 배열의 각 요소에 적용하여 새로운 배열을 반환하는 함수. 따라서 반복문 없이도 배열의 각 요소에 특정 작업을 수행하지 않고 그 결과를 새 배열로 얻을 수 있음. */}
        
        {lists}
      </tbody>
    </table>
  </article>
    </>
  );
}

export default List;