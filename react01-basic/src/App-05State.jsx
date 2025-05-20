import './App.css';
import { useState } from "react";

function Top(props){
  return (
    <h2><a href='/' onClick={(event) => {
      event.preventDefault();
      props.myModeChange('both');
    }}>React = State 변경하기</a></h2>
  );
}
function MyCont1(props){
  return (
    <>
      <li><a href="/" onClick={(event)=> {
        event.preventDefault();
        props.myModeChange('front');
      }}>프론트엔드</a></li>

      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Javascript</li>
        <li>JQuery</li>
      </ul>
    </>
  );
}

function MyCont2(props){
  return (
    <>
      <li><a href="/" onClick={(event)=> {
        event.preventDefault();
        props.myModeChange('back');
      }}>백엔드</a></li>

      <ul>
        <li>Java</li>
        <li>Oracle</li>
        <li>JSP</li>
        <li>Spring Boot</li>
      </ul>
    </>
  );
}

function App() {
  const [mode, setMode] = useState('both');
  let contents = '';
  if(mode === 'front'){
    contents = <>
      <MyCont1 myModeChange = {(mode) => {
        setMode(mode);
      }}></MyCont1>
    </>
  } else if(mode === 'back'){
    contents = <>
      <MyCont2 myModeChange = {(mode) => {
        setMode(mode);
      }}></MyCont2>
    </>
  } else{
    contents = <>
      <MyCont1 myModeChange = {(mode) => {
        setMode(mode);
      }}></MyCont1>
      <MyCont2 myModeChange = {(mode) => {
        setMode(mode);
      }}></MyCont2>
    </>
  }

  return (
    <div className='App'>
      <Top myModeChange = {(mode) => {
        setMode(mode);
      }}></Top>
      <ol>
        {contents}
      </ol>
    </div>
  );
}

export default App
