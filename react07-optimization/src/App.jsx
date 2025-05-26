import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { useCallback } from 'react';

const Box = ({createBoxStyle}) => {
  const [style, setStyle] = useState({}); // useState 초기값 빈 객체로 설정

  useEffect(() => {
    console.log('박스 키우기');
    setStyle(createBoxStyle());
  }, [createBoxStyle]);

  return <div style={style}></div>
}

function App() {
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  // const createBoxStyle = () => {
  //   return {
  //     backgroundColor : 'pink',
  //     width : `${size}px`,
  //     height : `${size}px`,
  //   };
  // }

  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor : 'red',
      width : `${size}px`,
      height : `${size}px`,
    };
  }, [size]);


  return (
    <div className='App' style={{
      background : isDark ? 'black' : 'white',
    }}>
      <h1>useCallback()</h1>
      <input type="number" value={size} step={5} onChange={ (e) => setSize(e.target.value) }/>
      <button onClick={() => setIsDark(!isDark)}>테마변경</button>
      <Box createBoxStyle={createBoxStyle} />
    </div>
  );
}

export default App