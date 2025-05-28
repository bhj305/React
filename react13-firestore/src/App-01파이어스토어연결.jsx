import './App.css'
import { firestore } from './firestoreConfig';
import { setDoc, doc, getDoc } from "firebase/firestore";

function App() {
  console.log("firestore", firestore); // 파이어스토어 연결확인
// 도큐먼트 추가
    const addMessage = async () => {
      await setDoc(doc(firestore, "Korea", "Seoul"), {
        gu: "마포구",
        dong: "신촌동",
        hotplace: "연세대학교",
      });
      console.log('입력 성공');
    }

    // 도큐먼트 읽기
    const getMessage = async () => {
      const docRef = doc(firestore, "Korea", "Seoul");
      const docSnap = await getDoc(docRef);

      if(docSnap.exists()) {
        // 해당 도큐먼트가 존재하면 콘솔에 내용 출력
        console.log("Document data : " , docSnap.data());
      } else {
        console.log("NO such document!");
      }

      console.log('읽기 성공');
    }


  return (
    <div className='App'>
      <h2>Firebase - Firestore 연동 App</h2>
      <h3>Firebase 연결</h3>
      <input type="button" value='입력' onClick={addMessage} />
      <input type="button" value='읽기' onClick={getMessage} />
    </div>
  )
}

export default App