import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import './App.css'
import { firestore } from './firestoreConfig';
import {  useState } from 'react';

function App() {
  const [showData, setShowData] = useState([]); 

  const getCollection = async (sField, sStr) => {
    console.log('선택', sField);
    let getRows = [];

    // 1. 아이디로 검색했을 떄,
    if(sField === 'id'){
      const docRef = doc(firestore, "members", sStr);
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()){
        console.log('Document data: ', docSnap.data());
        getRows.push(docSnap.data()); 
      } else{
        console.log("No such document .. !");
      }
    }
    // 2. 이름으로 검색했을때,
    else if(sField === 'name') {
      const membersRef = collection(firestore, "members");
      console.log('membersRef', membersRef);
      const q = query(membersRef, where("name", "==", sStr)); 
      const querySnapshot = await getDocs(q);
      console.log('Document data: ', querySnapshot);
      querySnapshot.forEach((doc) => {
        console.log("반복인출", doc.id, doc.data());
        getRows.push(doc.data());
      });
    }

    let trArray = [];
    console.log("getRows", getRows);
    getRows.forEach((row) => {
      trArray.push(
        <tr key={row.id}>
          <td className='cen'>{row.id}</td>
          <td className='cen'>{row.pass}</td>
          <td className='cen'>{row.name}</td>
          <td className='cen'>{row.regdate}</td>
        </tr>
      );
    });
    setShowData(trArray);
  }

  return (
    <div className='App'>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
      
      <h2>Firebase - firestore 연동 App</h2>
      <h3>검색하기</h3>
      <form onSubmit= { (e) => {
        e.preventDefault();
        let sf = e.target.searchField.value;
        let ss = e.target.searchStr.value;
        getCollection(sf,ss);
      }}>
        <div className='input-group' id='myForm'>
          <select name='searchField' className="form-control" >
            <option value="id">아이디</option>
            <option value="name">이름</option>
          </select>
          <input type="text" name='searchStr' className='form-control'/>
          <button type='submit' className='btn btn-secondary'>전체조회</button>
        </div>
      </form>

      <table className='table table-bordered'>
        <thead>
          <tr className='text-center'>
            <th>아이디</th> <th>비밀번호</th> <th>이름</th> <th>가입일</th>
          </tr>
        </thead>
        <tbody>
          {showData}
        </tbody>
      </table>
    </div>
  )
}

export default App