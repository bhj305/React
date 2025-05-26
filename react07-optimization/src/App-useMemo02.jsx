import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { useMemo } from 'react';

function App() {
  const [number, setNumber] = useState(0); //useState 초기값 0
  const [switching, setSwitching] = useState(true); // useState 초기값 true

  // step1
  // const switchMode = switching ? 'On' : 'Off';

  // step2 상수를 객체로 변경 
  // const switchMode = {
  //   nowState : switching ? 'On' : 'Off'
  // };

  // step3
  const switchMode = useMemo(()=> {
    return { nowState : switching ? 'On' : 'Off' };
  }, [switching]);


  // step1 : 값의 변화가 있을떄만 useEffect 호출
  useEffect(() => {
    console.log("Called useEffect() .. ");
  }, [switchMode]);

  return (
    <div className='App'>
      <h2>정수 카운터</h2>
      <input type="number" value= {number} onChange={(e) => setNumber(e.target.value)} />
      <hr/>
      <h2>Toggle Switch</h2>
      {/* 버튼을 누르면 boolean 상태가 변경됨(토글됨 확인)  step1: switchMode, step2:switchMode.nowState */}
      <p>스위치 상태(Step2) : { switchMode.nowState } </p>
      <button onClick={() => setSwitching(!switching)}>스위치 조작</button>
    </div>
  )
}

export default App