import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { useCallback } from 'react';

function App() {
  // state 선언
  const [countNumber, setCountNumber] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);

  // Step1: 일반적인 화살표 함수로 선언.
  // const somethingGood = () => {
  //   console.log("somethingGood 호출 .. :  ${countNumber}, ${randomNumber}");
  //   return;
  // }

  // Step2: 함수에 useCallback을 적용하여 렌더링 시 딱 한번만 함수를 캐시에 저장함
  const somethingGood = useCallback(()=>{
    console.log(`somethingGood 호출 .. :  ${countNumber}, ${randomNumber}`);
    return;
  // }, []); // Step2: countNumber 가 바뀌면 적용되게 수정
  }, [countNumber]); // Step3: countNumber 가 바뀌면 적용되게 수정

  useEffect (()=> {
    console.log('somethingGood() or randomNumber() 변경됨.')
  }, [somethingGood]);

  return (
    <div className='App'>
      <h2>useCallback()</h2>
      <input type="number" value={countNumber} 
        onChange={(e) => setCountNumber(e.target.value)} />

      <button onClick={()=> {
        setRandomNumber(Math.random());
      }}>
        난수: ${randomNumber}
      </button>
      <br/>
      <button onClick={somethingGood}>somethingGood 호출</button>
    </div>
  )
}

export default App