import { useState } from 'react'
import './App.css'
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from './firestoreConfig';

function App() {
  const [showData, setShowData] = useState([]); // 초기값은 배열로, 여러 값이 있을 수도 있으니
  const getCollection = async () => {
    let trArray = [];
    const querySnapshot = await getDocs(collection(firestore, "members")); // members 콜렉션(테이블) 가져오기 
    querySnapshot.forEach((doc)=> {
      // console.log(doc.id , "=>", doc.data());
      let memberInfo = doc.data();
      // console.log("파싱", doc.id, memberInfo.pass, memberInfo.name, memberInfo.regdate );
      trArray.push (
        <tr key={doc.id}>
          <td className='cen'>{doc.id}</td>
          <td className='cen'>{memberInfo.pass}</td>
          <td className='cen'>{memberInfo.name}</td>
          <td className='cen'>{memberInfo.regdate}</td>
        </tr>
      );
    });
    // 파싱한 걸 렌더링 해주기 
    setShowData(trArray);
  }

  return (
    <div className='App'>
      <h2>Firebase - firestore 연동 App</h2>
      <h3>전체 조회하기</h3>
      <button type='button' onClick={getCollection}>전체조회</button>
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