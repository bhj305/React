import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [renderer, setRenderer ] = useState(0);
  const countRef = useRef(0);

  let countVar = 0;
  const doRendering = () => {
    setRenderer(renderer + 1);
  };

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log('ref', countRef.current);
  };

  // 일반 변수를 1 증가시킨다.
  const increaseVar = () => {
    countVar = countVar + 1;
    console.log('var', countVar);
  };

  // 각 변수의 현재값 출력
  const printResult = () => {
    console.log(`ref: ${countRef.current}, var: ${countVar}`);
  };

  return (
    <div className='App'>
      <p>Ref: { countRef.current }</p>
      <p>Var: { countVar }</p>
      <button onClick={doRendering}>렌더링</button>
      <button onClick={increaseRef}>Ref 증가</button>
      <button onClick={increaseVar}>Var 증가</button>
      <button onClick={printResult}>Ref/Var출력</button>
    </div>
  );
}

export default App