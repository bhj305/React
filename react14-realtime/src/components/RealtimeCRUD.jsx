import { child, get, getDatabase, push, ref, remove, set, update } from "firebase/database";
import { realtime } from "../realtimeConfig";
import Navi from "./Navi";
import { useState } from "react";

function RealtimeCRUD() {
  console.log('realtime', realtime);

  // 입력
  function writeUserData(userId, userName, userPass){
    const newPostKey = push(child(ref(realtime), 'tempValue')).key;
    // set(): 기본 쓰기 작업에 사용. 최상위 노드를 users로 하기.
    set(ref(realtime, 'users/' + userId), {
      name : userName,
      pass: userPass,
      fireKey : newPostKey// 등록을 위한 새로운 키값이 생성됨.
    });
    console.log('입력성공'); 
  }

  // 읽기
  function readUserData(userId){
    // 데이터베이스 얻어오기
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${userId}`)).then((snapshot) => {
      if(snapshot.exists()) {
        console.log(snapshot.val()); // 데이터가 존재하는 경우 콘솔에 출력
      } else {
        console.log("No data available");
      }
    })
    .catch((error)=> {
      console.error(error);
    });
  }

  // 수정
  function editUserData(userId, userName, userPass){
    // 고유키 생성
    const newPostKey = push(child(ref(realtime), 'tempValue')).key;
    // 수정할 데이터를 객체 형식으로 작성
    const postData = {
      name : userName,
      pass : userPass,
      fireKey : newPostKey
    };
    // 아이디로 지정된 데이터를 찾아서 수정
    const updates = {};
    updates['/users/'+userId] = postData;
    return update(ref(realtime), updates);
  }

  // 삭제1
  function deleteUserData1(userId){
    const deletes = {};
    deletes['/users/' + userId] = null; // 기존 데이터를 null 로 대체해서 삭제
    return update(ref(realtime), deletes);
  }

  // 삭제2: remove 함수 사용
  function deleteUserData2(userId){
    remove(ref(realtime, 'users/' + userId))
    .then (() => {
      console.log('삭제완료 ');
    })
    .catch((error)=> {
      console.error('삭제 실패',error)
    });
  }


  // 입력을 위한 State로 <input>의 스핀박스를 누를때마다 변경됨.
  const [addNum, setAddNum] = useState(0);
  // 입력 데이터로 변경된 State가 즉시 적용됨.
  let adder = '-' + addNum;
  const id = 'test'+adder;
  const name = "test"+adder;
  const pass = "1234"+adder;


  return (
    <div className="App">
      <Navi />
      <h2>Firebase - Realtime Database App</h2>
      <h3>01. CRUD </h3>
      {/* number타입의 <input>이므로 스핀박스가 생성되어 변경할 수 있다.  */}
      <input type="number" value={addNum} onChange={(e)=>{setAddNum(e.target.value);}} />
      <input type="button" value='입력' onClick={()=>{
        writeUserData(id, name, pass);
      }} />
      <input type="button" value='읽기' onClick={ () => {
        readUserData(id);
      }} />
      <input type="button" value='수정' onClick={ () => {
        editUserData(id, name+'edit', pass+'edit');
      }} />
      <input type="button" value='삭제1' onClick={ () => {
        deleteUserData1(id);
      }} />
      <input type="button" value='삭제2' onClick={ () => {
        deleteUserData2(id);
      }} />
    </div>
  );
}

export default RealtimeCRUD