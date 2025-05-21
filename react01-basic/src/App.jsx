import './App.css'
function App() {
 const myStyle = {
   color: "white",
   backgroundColor: "DodgerBlue",
   padding: "10px",
   fontFamily: "Verdana"

 };

  return (
    <div className='App'>
      <h1>React - Style 지정하기</h1>
      <ol>
        {/* style 속성을 직접 부여할때는 컬리브레이스 사용  */}
        <li style={{color: "red"}}>프론트엔드</li>
        <ul style={ myStyle }>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Javascript</li>
          <li>jQuery</li>
        </ul>

        <li className='backEnd'>백엔드</li>
        <ul>
          <li id='backEndSub'>Java</li>
          {/* class 로 지정하면 경고는 발생하지만, 사용은 가능함. className 으로 사용해야 함. */}
          <li class='warnings'>Oracle</li> 
          <li>JSP</li>
          <li>Spring Boot</li>
        </ul>
      </ol>
    </div>
  )
}

export default App
