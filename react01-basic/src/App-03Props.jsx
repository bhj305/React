import './App.css'

function FrontComp(props){
  const liRows = [];

  for (let i = 0; i < props.propData1.length; i++) {
    liRows.push(
      // 각 루프에서 배열에 jsx 항목을 하나씩 추가
      <li key={i}>{props.propData1[i]}</li>
    );
  }

  return(<>
    <li>프론트앤드</li>
      <ul>
        {liRows}
      </ul>
  </>)
}

const BackComp = ({propData2}) => {
  const liRows = [];
  let keyCnt = 0;
  for (let row of propData2) {
    liRows.push(
      <li key= {keyCnt++}>{row}</li>
    );
  }

  return (<>
    <li>백앤드</li>
      <ul>
        {liRows}
      </ul>
  </>)
}

function App(){
  // props 로 사용할 배열 변수 선언
  const frontData = ['html', 'css3', 'javascript', 'jquery', 'React 추가'];
  const backData = ['java', 'oracle', 'jsp', 'spring boot', 'nextjs 추가'];

  return (<>
    <div>
      <h2>React-Props</h2>
      <ol>
        <FrontComp propData1 ={frontData}></FrontComp>
        <BackComp propData2={backData} />
      </ol>
    </div>
  </>)
}


export default App
