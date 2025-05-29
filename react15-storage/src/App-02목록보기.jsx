import { getDownloadURL, listAll, ref } from 'firebase/storage'
import './App.css'
import { storage } from './storageConfig'
import { useEffect, useState } from 'react';

function App() {
  const listRef = ref(storage, '');

  const [fileLists, setFileLists] = useState([]);
  console.log('렌더링');

  // 1차 렌더링 완료 후 파일목록을 비동기로 가져옴
  useEffect(()=> {
    let fileRows = []; // 행을 가져오는 배열선언
    // 생성된 참조에서 모든 폴더와 파일명 인출
    listAll(listRef)
      .then((res)=>{
        res.prefixes.forEach((folderRef)=>{
          console.log('Folder', folderRef); // 폴더명 출력
        });
        // 파일목록 출력
        res.items.forEach((itemRef)=>{
          console.log('File name', itemRef.name); // 파일명 출력
          getDownloadURL(ref(storage, itemRef.name))
            .then((url)=> {
              // 파일 목록이 모두 출력된 후 이 부분이 실행됨.
              console.log('Download file URL');
              const img = document.getElementById(`img_${itemRef.name}`);
              // img 의 src, width 속성 부여
              img.setAttribute('src', url);
              img.setAttribute('width', '200');
            })
            .catch((error) => {
              console.log("DOWNLOADING ERROR !!!", error)
            });
          fileRows.push(
            <tr key={itemRef.name}>
              <td>{itemRef.bucket}</td>
              <td>{itemRef.fullPath}</td>
              <td>{itemRef.name}</td>
              <td> <img id={`img_${itemRef.name}`} alt="" /> </td>
            </tr>
          );
        });
        setFileLists(fileRows);

      })
      .catch((error) => {
        console.log('파일 목록 출력 중 에러 발생 ', error);
      });
  },[]);

  return (
    <div className='App'>
      <h2>Firebase - Storage App</h2>
      <h3>파일 목록 및 이미지 다운로드</h3>
      <table border={1}>
        <thead>
          <tr>
            <th>bucket</th>
            <th>fullpath</th>
            <th>name</th>
            <th>image</th>
          </tr>
        </thead>
        <tbody>
          {fileLists}
        </tbody>
      </table>
    </div>
  )
}

export default App