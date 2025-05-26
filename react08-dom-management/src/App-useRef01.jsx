import { useRef, useState } from 'react';
import './App.css'

function App() {
  console.log('렌더링 됨 .. !!');

  // state 생성
  const [count, setCount] = useState(0);
  // useRef 를 통해 변수 생성
  const countRef = useRef(0);
  console.log('countRef', countRef);

  const increseCountState = () => {
    setCount(count + 1);
  }

  // Ref로 선언된 값을 1 증가시킴
  const increseCountRef = () => {
    countRef.current = countRef.current +1 ;
    console.log('Ref', countRef.current); // countRef.current가 잘 증가되어있는지 확인 
  }
  return (
    <div className='App'>
      <p>State: {count}</p>
      <p>Ref: { countRef.current}</p>

      <button onClick={increseCountState}>State 증가</button>
      {/* Ref가 변경되지만 화면은 렌더링 되지 않음. */}
      <button onClick={increseCountRef}>Ref 증가</button> 
    </div>
  )
}

export default App