import { useState } from 'react';
import './App.css'

function ReadyComp(){
  return(
    <div>
      <h3>컴포넌트 준비중입니다. ^^*</h3>
      <a href="/">Home 바로가기</a>
    </div>
  );
}

function Header(props){
  console.log('props', props.title);
  return(
    <header>
      <h2>{props.title}</h2>
    </header>
  );
}

// 목록의 내비게이션
function NavList(props){
  return(
    <nav>
      <a href="/" onClick={ function (event){
        event.preventDefault();
        props.onChangeMode();
      }}>목록</a>
    </nav>
  );
}

// 읽기의 내비게이션
function NavView(props){
  return(
    <nav>
      <a href="/" onClick={function(event){
        event.preventDefault(); // 부모가 전달해준 함수를 받음
        props.onChangeMode('list');
      }}>목록</a>&nbsp;
      <a href="/" onClick={function(event){
        event.preventDefault(); // 부모가 전달해준 함수를 받음
        props.onChangeMode('edit');
      }}>목록</a>{" "}
      <a href="/" onClick={function(event){
        event.preventDefault(); // 부모가 전달해준 함수를 받음
        props.onChangeMode('delete');
      }}>삭제</a>
    </nav>
  );
}

// 쓰기의 내비게이션
function NavWrite(props){
  return(
    <nav>
      <a href="/" onClick={ function (event){
        event.preventDefault();
        props.onChangeMode();
      }}>글쓰기</a>
    </nav>
  );
}

// 목록
function ArticleList(props){
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
// 읽기
function ArticleView(props){
  return(
    <article>
      <table id="boardTable">
        <colgroup>
          <col width = '30%' /><col witdh="*" />
          <tbody>
            <tr>
              <td>작성자</td>
              <td>성유겸</td>
            </tr>
            <tr>
              <td>제목</td>
              <td>오늘은 React 공부하는 날</td>
            </tr>
            <tr>
              <td>날짜</td>
              <td>2025-05-20</td>
            </tr>
            <tr>
              <td>내용</td>
              <td>열심히 해봅시도오<br/>열공합시도오</td>
            </tr>
          </tbody>
        </colgroup>
      </table>
    </article>
  );
}

// 쓰기
function ArticleWrite(props){
  return(
    <article>
      <form action="">
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
        <input type="submit" value="전송" />
      </form>
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

  const [mode, setMode] = useState('list');
  let articleComp, navComp, titleVar;

  if(mode === 'list'){
    titleVar = '게시판-목록(props)';
    navComp = <NavList onChangeMode= {() => {
      setMode('write');
    }}></NavList>
    articleComp = <ArticleList boardData= { boardData }
    onChangeMode = {(no) => {
      console.log('선택한 게시물 번호: ' + no);
      setMode('view');
      }
    }></ArticleList>
  } else if(mode === 'write'){
    titleVar = '게시판-쓰기(props)';
    navComp = <NavWrite onChangeMode= {() => {
      setMode('list');
    }}></NavWrite>
    articleComp = <ArticleWrite></ArticleWrite>;
  } else {
    navComp = <ReadyComp></ReadyComp>;
    articleComp = '';
  }

  return (
    <div className='App'>
      <Header title={titleVar}></Header>
      {navComp}
      {articleComp}
    </div>
  )
}

export default App
