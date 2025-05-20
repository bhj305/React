import './App.css'

// React 컴포넌트 이름은 항상 대문자로 시작
function MyBody(){
  return(
    <ol>
      <li>프론트앤드</li>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Javascript</li>
        <li>jQuery</li>
      </ul>

      <li>백앤드</li>
      <ul>
        <li>Java</li>
        <li>Oracle</li>
        <li>JSP</li>
        <li>Spring Boot</li>
      </ul>
    </ol>
  )
}
// 메타에서 만든 유사자바스크립터(JSX)
function App() {

  return (
    <div className='App'>
      <h2>React 기본형</h2>
      <MyBody></MyBody> {/*  컴포넌트는 html 태그와 같이 기술하면 됨. 대문자로 시작함.*/}
    </div> // jsx는 html보다 엄격하므로 </div> 과 같이 태그를 반드시 닫아야 함.
  )
}

export default App
