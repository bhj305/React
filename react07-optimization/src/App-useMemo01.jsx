import { useState } from 'react';
import './App.css'
import { useMemo } from 'react';



const longTimeCalculate = (number) => {
  console.log("시간이 많이 걸리는 계산");
  for (let i = 0; i < 1234567890; i++) {};
  return number + 10000;
}

const simpleCalculate = (number) => {
  console.log("시간이 짧게 걸리는 계산");
  return number + 1;
}

function App() {
  const [longTimeNum, setLongTimeNum] = useState(1);
  const [simpleNumber, setSimpleNumber] = useState(1);

  // const longTimeSum = longTimeCalculate(longTimeNum);
  // const simpleSum = simpleCalculate(simpleNumber);
  
  const longTimeSum = useMemo(() => {
    return longTimeCalculate(longTimeNum);
  }, [longTimeNum]); // longTimeNum이 변할떄만 useMemo 를 사용하겠음.
  const simpleSum = simpleCalculate(simpleNumber);



  return (
    <div className='App'>
      <h2>Long Time 계산기</h2>
      <input type="number" value={longTimeNum} 
         onChange={(e) => setLongTimeNum(parseInt(e.target.value))}
        />
        <span> + 10000 = {longTimeSum} </span>

      <h2>Short Time 계산기</h2>
      <input type="number" value={simpleNumber} 
         onChange={(e) => setSimpleNumber(parseInt(e.target.value))}
        />
        <span> + 1 = {simpleSum} </span>

    </div>
  );
}

export default App