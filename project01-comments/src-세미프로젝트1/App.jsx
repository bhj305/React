import './App.css';
import {useState} from 'react';

import Board from './commons/Board';
import ComList from './commons/ComList';
import ComWrite from './commons/ComWrite';
import ComEdit from './commons/ComEdit';

function nowDateStr(){
  let dateObj = new Date();
  var year = dateObj.getFullYear();
  var month = ("0" + (1+ dateObj.getMonth())).slice(-2);
  var day = ("0" + dateObj.getDate()).slice(-2);
  return year + "-" + month + "-" + day;
}


function App() {
  const [myData, setMyData] = useState([
    {no:1, comment:'오늘은 React공부하는날', writer:'낙짜쌤', date:'2023-01-01'},
    {no:2, comment:'어제는 Javascript공부해씸', writer:'유겸이', date:'2023-03-03'},
    {no:3, comment:'내일은 Project해야징', writer:'개똥이', date:'2023-05-05'},
  ]);

  const [mode, setMode] = useState('list');
  const [nextNo, setNextNo] = useState(4);
  const [no, setNo] = useState(null);

  let writeEditComp, selectData;
  if(mode === 'list'){
    writeEditComp =<ComWrite writeEditComp = {(w, c) => {
      let nowDate = nowDateStr();
      let addData = { no: nextNo, writer: w, contents: c, date: nowDate};
      setNextNo(nextNo+1);
      let myDataCopy = [...myData];
      myDataCopy.push(addData);
      setMyData(myDataCopy);  
    }}></ComWrite> 
  } else{
    console.log('no', no);
    for (let i = 0; i < myData.length; i++) {
      if(no === myData[i].no){
        selectData = myData[i];
      }
    }
    console.log('수정데이터', selectData);
    writeEditComp = <ComEdit selectData = {selectData}
      changeMode = {(pmode, pno) => {
        setMode(pmode);
        setNo(pno);
      }}
      // 수정처리 부분
      editAction = {(w, c) => {
        let editData = {no: no, writer: w, contents: c, date: selectData.date};
        let myDataCopy = [...myData];
        for (let i = 0; i < myDataCopy.length; i++) {
          if(myDataCopy[i].no === no){
            myDataCopy[i] = editData;
            break;
          }
        }
        setMyData(myDataCopy);
        setMode('list');
      }
    }></ComEdit>
  }

  return (
    <div className="App">
      <Board></Board>
      <ComList myData={myData}
        onDelete= {(pno) =>{
          console.log('삭제 no', pno, typeof(pno));
          let myDataCopy = [...myData];
          for(let i=0; i <myDataCopy.length; i++){
            if(pno === myDataCopy[i].no){
              console.log("찾음");
              myDataCopy.splice(i, 1);
            }
          }
          setMyData(myDataCopy);
          setMode('list');
        }}
        changeMode = {(pmode, pno) => {
          if(mode === 'edit' && pmode ==='edit'){
            alert('현재 수정 mode 입니다. 수정취소를 먼저 눌러주세요.');
          } else {
            setMode(pmode);
            setNo(pno);
          }
        }}
        ></ComList>
        { writeEditComp }
      {/* <ComWrite />
      <ComEdit /> */}
    </div>
  );
}

export default App;