import './App.css'

function Header(props){
  console.log('props', props.title);
  return(
    <header>
      <h2>{props.title}</h2>
    </header>
  );
}

function Nav(props){
  return(
    <nav>
      <a href="/" onClick={function(event){
        event.preventDefault(); // 부모가 전달해준 함수를 받음
        props.onChangeMode();
      }}>글쓰기</a>
    </nav>
  );
}

function Article(props){
  const lists = [];
  for (let i = 0; i < props.boardData.length; i++) {
    let row = props.boardData[i];
    lists.push(
      <tr key={ row.no}>
        <td className="cen">{row.no}</td>
        <td><a href={'/read/' + row.no } onClick={(event) => {
          event.preventDefault();
          props.onChangeMode(row.no); // 각 게시물의 일련번호를 받기
        }}>{row.title}</a></td>
        <td className="cen">{row.writer}</td>
        <td className="cen">{row.date}</td>
      </tr>
    );
  }
  return(
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
          { lists }
        </tbody>
      </table>
    </article>
  );
}

function App() {
  const boardData = [
    {no:1, title:'오늘은 React 공부하는 날 ', writer: '홍길동', date: '2025-01-01', contents: 'React를 뽀개봅시다.'},
    {no:2, title:'어제는 Javascript 공부했음 ', writer: '임꺽정', date: '2025-03-03', contents: 'Javascript를 할게 너무 많아욥.'},
    {no:3, title:'내일은 Project 해야 함 ', writer: '뽀덩이', date: '2025-05-05', contents: '프로젝트는 뭐해야할깝?'},
    {no:4, title:'추가 Project 해야 함 ', writer: '손오공', date: '2025-07-05', contents: '프로젝트는 뭐해야할깝?'},
  ];

  return (
    <div className='App'>
      <Header title="게시판 - 목록 (props)"></Header>
      <Nav onChangeMode={ function() {
        alert("글쓰기 페이지로 이동");
      }}></Nav>
      <Article boardData={ boardData } onChangeMode={(no) => {
        alert('선택한 게시물 번호:' + no)
      }}></Article>
    </div>
  )
}

export default App
