import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const down = () => {
    setCount(count - 1);
    // console.log('count', count);
  }

  const up = () => {
    setCount(count + 1);
    // console.log('count', count);
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <div className='App'>
      <h2>useReducer 훅 사용하기</h2>
      <div>
        <input type="button" value="-" onClick={down} />
        <input type="button" value="reset" onClick={reset} />
        <input type="button" value="+" onClick={up} />
        <span> {count} </span>
      </div>
    </div>
  )
}

export default App