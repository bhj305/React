import './App.css'

// 이벤트 처리
function MyBody(props){
  const liTag1 = [], liTag2=[];

  for (let i = 0; i < props.propData1.length; i++) {
    console.log("프론트엔드Datas", props.propData1[i]);
    liTag1.push(
      <li key = {i}>{props.propData1[i]}</li>
    );
  }

  let keyCnt = 0;
  for(let row of props.propData2){
    liTag2.push(
      <li key={keyCnt++}>{row}</li>
    );
  }
  return(
    <ol>
      <li><a href ='/' onClick= {()=>{props.onMyAlert1();}}>프론트앤드</a></li>
        <ul>
          {liTag1}
        </ul>

      <li><a href='/' onClick={(event)=>{
        event.preventDefault();
        props.onMyAlert2('백앤드');}
      }>백앤드</a></li>
        <ul>
          {liTag2}
        </ul>
    </ol>
  );
}
function App() {
  const myData1 = ['html', 'css3', 'javascript', 'jquery', 'React 추가'];
  const myData2 = ['java', 'oracle', 'jsp', 'spring boot', 'nextjs 추가'];

  return (
    <div className='App'>
      <h1>React - event </h1>
      <MyBody propData1= {myData1} propData2= {myData2}
        onMyAlert1={function(){
          alert('알림창을 띄웁니다.');
        }}
        onMyAlert2 = {function(msg){
          alert(msg);
        }}
        ></MyBody>
    </div>
  );
}

export default App
