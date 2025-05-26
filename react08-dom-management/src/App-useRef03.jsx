import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {
  const [count, SetCount] = useState(1);
  // const [renderCount, setRenderCount] = useState(1);
// 무한루프에 빠지게 됨.
  // useEffect ( ()=> {
  //   console.log('렌더링01');
  //   setRenderCount(renderCount + 1);
  // })
  const renderCount = useRef(1);

  useEffect(()=>{
    console.log('랜더링02', renderCount.current);
    renderCount.current = renderCount.current + 1;
  });
  
  return (
    <div className='App'>
      <p>Count : {count} </p>
      <button onClick={() => SetCount(count+1)}>카운트 증가</button>
    </div>
    
  )
}

export default App