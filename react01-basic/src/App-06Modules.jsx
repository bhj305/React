// App 컴포넌트에서 사용하는 스타일시트
import { useState } from 'react'
import './App.css'

// 확장자는 생략 후 임포트해주기
import ViewComponent from './component/ViewComponent';
import WriteComponent from './component/WriteComponent';
import ListComponent from './component/ListComponent';

function App() {
  const [mode, setMode] = useState('list'); // 초기값은 list 로 설정해주기 
  let contents = '';
  if(mode === "view"){
    contents = <ViewComponent changeMode={(pmode) => { setMode(pmode)}}></ViewComponent>
  } else if(mode === "write"){
    contents = <WriteComponent changeMode={(pmode) => { setMode(pmode)}}></WriteComponent>
  } else {
    contents = <ListComponent changeMode={(pmode) => { setMode(pmode)}}></ListComponent>
  }

  return (
    <div className='App'>
      <h1>React - 모듈화</h1>
      { contents }
    </div>
  )
}

export default App
