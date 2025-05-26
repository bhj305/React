import { useRef } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const inputRef = useRef();
  useEffect(()=>{
    console.log(inputRef);
    inputRef.current.focus();
  }, []);

  const login = () => {
    alert(`${inputRef.current.value} 님, 환영합니다. `);
    inputRef.current.value = '';
    inputRef.current.focus();
  }


  return (
    <div className='App'>
      <input type="text" placeholder='아이디' ref={inputRef} />
      <button onClick={login}>로그인</button>
    </div>
  );
}

export default App