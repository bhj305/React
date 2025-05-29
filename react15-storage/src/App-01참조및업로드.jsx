import './App.css'

import { ref, uploadBytes } from 'firebase/storage';
import { storage } from './storageConfig';

function App() {
  const storageRef = ref(storage);
  console.log('storageRef', storageRef);

  const imageRef1 = ref(storage, 'images'); // 경로: root/images 
  const imageRef2 = ref(storage, 'images/myFile.jpg'); // 경로: root/images/myFile.jpg

  const imageRef3 = imageRef2.parent; // 경로: root/images 
  const imageRef4 = imageRef2.root; // 경로: root/ => 최상위이므로 콘솔에는 빈값 출력됨

  console.log('ref 객체', imageRef1); // 객체를 통해 모든 프로퍼티 확인
  console.log('경로1', imageRef1.fullPath);
  console.log('경로2', imageRef2.fullPath, imageRef2.name);
  console.log('경로3', imageRef3.fullPath);
  console.log('경로4', imageRef4.fullPath);


  
  return (
    <div className='App'>
      <h2>Firebase - Storage App</h2>
      <h3>Storage 접속 및 파일 업로드</h3>
      <p>파일을 선택하면 즉시 업로드 됩니다.</p>
      <input type="file" name='myfile' onChange={(e) => {
        console.log('files properties ', e.target.files);
        console.log('0번째 파일 객체', e.target.files[0]);
        console.log('0번째 파일 객체', e.target.files[0].name);
        const imageRef = ref(storage, e.target.files[0].name);
        uploadBytes(imageRef, e.target.files[0]).then((snapshot) => {
          console.log('업로드 성공', snapshot)
        })
      }} />
    </div>
  )
}

export default App