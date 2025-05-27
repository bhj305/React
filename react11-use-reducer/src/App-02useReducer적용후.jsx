import { useReducer, useState } from 'react';
import './App.css'

const countReducer = (prevCount, action) => {
  if(action.mode === 'up'){
    return prevCount + action.number;
  } else if (action.mode === 'down'){
    return prevCount - action.number;
  } else if(action.mode === 'reset'){
    return 0;
  }
}

function App() {
  const [count, countDispatch] = useReducer(countReducer, 0); // set init Value to 0
  const [number, setNumber] = useState(1);

  const changeNumber = (event) => {
    setNumber(Number(event.target.value));
  }

  const down = () =>{
    countDispatch({mode:'down', number:number});
  }
  const up = () =>{
    countDispatch({mode:'up', number:number});
  }
  const reset = () =>{
    countDispatch({mode:'reset', number:number});
  }

  return (
    <div className='App'>
      <h2>useReducer 훅 사용하기</h2>
      <div>
        <input type="button" value="-" onClick={down} />
        <input type="button" value="reset" onClick={reset} />
        <input type="button" value="+" onClick={up} />
        <input type="number" value={number} onChange={ changeNumber } />
        <span> {count} </span>
      </div>
    </div>
  );
}

export default App