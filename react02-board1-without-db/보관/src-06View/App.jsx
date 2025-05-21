import { useState } from 'react';
import './App.css'
import NavList from './components/navigation/NavList';
import NavWrite from './components/navigation/NavWrite';
import NavView from './components/navigation/NavView';
import ArticleList from './components/article/ArticleList';
import ArticleWrite from './components/article/ArticleWrite';
import ArticleView from './components/article/ArticleView';

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

function App() {
  const boardData = [
    {no:1, title:'오늘은 React 공부하는 날 ', writer: '홍길동', date: '2025-01-01', contents: 'React를 뽀개봅시다.'},
    {no:2, title:'어제는 Javascript 공부했음 ', writer: '임꺽정', date: '2025-03-03', contents: 'Javascript를 할게 너무 많아욥.'},
    {no:3, title:'내일은 Project 해야 함 ', writer: '뽀덩이', date: '2025-05-05', contents: '프로젝트는 뭐해야할깝?'},
    {no:4, title:'추가 Project 해야 함 ', writer: '손오공', date: '2025-07-05', contents: '프로젝트는 뭐해야할깝?'},
  ];

  const [mode, setMode] = useState('list');
  const [no, setNo] = useState(null);

  let articleComp, navComp, titleVar, selectRow;

  if(mode === 'list'){
    titleVar = '게시판-목록(props)';
    navComp = <NavList onChangeMode= {() => {
      setMode('write');
    }}></NavList>
    articleComp = <ArticleList boardData= { boardData }
    onChangeMode = {(no) => {
        console.log('선택한 게시물 번호: ' + no);
        setMode('view');
        setNo(no);
      }
    }></ArticleList>
  } else if(mode === 'write'){
      titleVar = '게시판-쓰기(props)';
      navComp = <NavWrite onChangeMode= {() => {
      setMode('list');
    }}></NavWrite>
    articleComp = <ArticleWrite></ArticleWrite>;
  } else if(mode === 'view'){
      titleVar = '게시판 - 읽기(props)';
      navComp = <NavView onChangeMode={(pmode) => {
      setMode(pmode);
    }}></NavView>

    console.log("현재 no: ", no, typeof(no));
    for (let i = 0; i < boardData.length; i++) {
      if(no === boardData[i].no){
        selectRow = boardData[i];
      }
    }

    articleComp = <ArticleView selectRow={selectRow}></ArticleView>
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
