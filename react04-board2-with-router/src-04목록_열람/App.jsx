import './App.css'
import { Route, Link, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import List from './components/board/List';
import View from './components/board/View';
import Write from './components/board/Write';
import NotFound from './components/common/NotFound';

function App() {
  const boardData = [
    {no:1, title:'오늘은 React 공부하는 날 ', writer: '홍길동', date: '2025-01-01', contents: 'React를 뽀개봅시다.'},
    {no:2, title:'어제는 Javascript 공부했음 ', writer: '임꺽정', date: '2025-03-03', contents: 'Javascript를 할게 너무 많아욥.'},
    {no:3, title:'내일은 Project 해야 함 ', writer: '뽀덩이', date: '2025-05-05', contents: '프로젝트는 뭐해야할깝?'},
  ];

  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<List boardData={ boardData }/>} />
          <Route path='/list' element={<List boardData={ boardData }/>} />
          <Route path='/view'>
            <Route path=':no' element={<View boardData= { boardData} />} />
          </Route>
          <Route path='/write' element={<Write></Write>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
