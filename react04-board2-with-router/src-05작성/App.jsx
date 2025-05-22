import './App.css'
import { Route, Routes } from 'react-router-dom';

// 글쓰기 완료시 페이지 이동을 위한 훅 임포트
import { useNavigate } from 'react-router-dom'; 
import { useState } from 'react';

import List from './components/board/List';
import View from './components/board/View';
import Write from './components/board/Write';
import NotFound from './components/common/NotFound';

const nowDate = () => {
  let dateObj = new Date();
  var year = dateObj.getFullYear();
  var month = ("0" + (1+ dateObj.getMonth())).slice(-2);
  var day = ("0" + dateObj.getDate()).slice(-2);
  return year + "-" + month + "-" + day;
}

function App() {
  const [boardData, setBoardData] = useState([
    {no:1, title:'오늘은 React 공부하는 날 ', writer: '홍길동', date: '2025-01-01', contents: 'React를 뽀개봅시다.'},
    {no:2, title:'어제는 Javascript 공부했음 ', writer: '임꺽정', date: '2025-03-03', contents: 'Javascript를 할게 너무 많아욥.'},
    {no:3, title:'내일은 Project 해야 함 ', writer: '뽀덩이', date: '2025-05-05', contents: '프로젝트는 뭐해야할깝?'},
  ]);
  const [nextNo, setNextNo] = useState(4); // 4번쨰부터 시작 
  const navigate = useNavigate(); // 작성 완료 후 페이지 이동을 위한 react 훅

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<List boardData={ boardData }/>} />
        <Route path='/list' element={<List boardData={ boardData }/>} />
        <Route path='/view'>
          <Route path=':no' element={<View boardData= { boardData} />} />
        </Route>
        <Route path='/write' element={<Write 
          boardData={boardData} setBoardData={setBoardData}
          nextNo={nextNo} setNextNo={setNextNo}
          navigate={navigate} nowDate={nowDate}
          />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
