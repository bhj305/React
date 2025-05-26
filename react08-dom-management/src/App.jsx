import { useEffect, useId, useRef, useState } from 'react'
import './App.css'

function App() {

  return (
    <div className='App'>
      <MyInput1 />
    </div>
  );
}


function MyInput1(){
  const myId = useId();
  const myRef = useRef();

  useEffect (()=>{
    const button1 = document.getElementById('Btn');
    const button2 = myRef.current;

    console.log('Button1: ', button1);
    console.log('Button2: ', button2);

  }, []);

  function btn1Clicked(){
    const button1 = document.getElementById('btn');
    if(button1.style.backgroundColor === 'black'){
      button1.style.backgroundColor = 'white';
      button1.style.color = 'black';
      
    } else {
      button1.style.backgroundColor = 'black';
      button1.style.color = 'white';
  
    }
  }
  
  const [btnStyle, setBtnStyle] = useState({
    'backgroundColor' : 'yellow',
    'color' : 'red',
  });
  const btn2Clicked = () => {
    if(btnStyle.color === 'red'){
      setBtnStyle({
        'backgroundColor' : 'blue',
        'color': 'white',
      });
    } else{
      setBtnStyle({
        'backgroundColor' : 'yellow',
        'color': 'red',
  
      });
    }
  }
  return (
    <div>

      <button id='btn' onClick={btn1Clicked}>버튼1 </button>
      <button id={myId} ref={myRef} onClick = {btn2Clicked} style={btnStyle}>버튼2 </button>

    </div>
  )
}

export default App