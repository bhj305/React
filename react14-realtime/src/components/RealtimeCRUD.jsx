import { child, get, getDatabase, push, ref, remove, set, update } from "firebase/database";
import { realtime } from "../realtimeConfig";
import Navi from "./Navi";
import { useState } from "react";

function RealtimeCRUD() {
  console.log('realtime', realtime);

  // 입력
  function writeUserData(userId, userName, userPass){
    const newPostKey = push(child(ref(realtime), 'tempValue')).key;
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
    const newPostKey = push(child(ref(realtime), 'tempValue')).key;
    const postData = {
      name : userName,
      pass : userPass,
      fireKey : newPostKey
    };
    const updates = {};
    updates['/users/'+userId] = postData;
    return update(ref(realtime), updates);
  }

  // 삭제1
  function deleteUserData1(userId){
    const deletes = {};
    deletes['/users/' + userId] = null;
    return update(ref(realtime), deletes);
  }

  // 삭제2
  function deleteUserData2(userId){
    remove(ref(realtime, 'users/' + userId))
    .then (() => {
      console.log('삭제완료 ');
    })
    .catch((error)=> {
      console.error('삭제 실패',error)
    });
  }


  const [addNum, setAddNum] = useState(0);
  let adder = '-' + addNum;
  const id = 'test'+adder;
  const name = "test"+adder;
  const pass = "1234"+adder;


  return (
    <div className="App">
      <Navi />
      <h2>Firebase - Realtime Database App</h2>
      <h3>01. CRUD </h3>
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