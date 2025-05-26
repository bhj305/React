import React from "react";
import { useRef } from "react";
import { useState } from "react";

export default function Stopwatch(props) {
  const [timerFlag, setTimerFlag] = useState(false); // flase면 멈춤상태
  let [ticker, setTicker] = useState(0);

  let timerRef = useRef(0);

  // 스탑워치 시작
  const startTimer = () => {
    ticker++;
    timerRef.current = setInterval(() => {
      console.log('Tic-Tok');
      setTicker(ticker++);
    }, 1000); // 1초에 값이 1씩 증가 
  }

  const stopTimer = () => {
    clearInterval(timerRef.current);
  }
  console.log('timerRef', timerRef);

  return (<>
    <div className="stopwatch">
      <h1 className="h1">StopWatch</h1>
      <span className="stopwatch-time">{ticker}</span>
      <button onClick={()=>{ 
        setTimerFlag(!timerFlag);
        (timerFlag === true) ? stopTimer() : startTimer();
        }}>{(timerFlag === false) ? 'Start' : 'Stop'}</button>

      <button onClick={()=>{
        // 동작중이면 동작중이라고 알림보내기 
        if(timerFlag === true){
          alert('StopWatch가 동작중입니다.')
        }else {
          // 정지되어있을 때, setTicker를 0으로 Reset
          setTicker(0);
        }
      }}>Reset</button>
    </div>
  </>);
}