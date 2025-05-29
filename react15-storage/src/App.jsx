import { deleteObject, listAll, ref } from 'firebase/storage'
import './App.css'
import { storage } from './storageConfig'
import { useEffect, useState } from 'react';

function App() {
  const listRef = ref(storage, '');
  // 파일 목록 및 삭제 후 전체 렌더링
  const [fileLists, setFileLists] = useState([]); 
  const [renderFlag, setRenderFlag] = useState(false);


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
          const deleteRef = ref(storage, itemRef.fullPath);

          // 파일목록 추가
          fileRows.push(
            <tr key={itemRef.name}>
              <td>{itemRef.bucket}</td>
              <td>{itemRef.fullPath}</td>
              <td>{itemRef.name}</td>
              <td> <button type='button' onClick={(e)=>{
                if(window.confirm('삭제할까요?')){
                  deleteObject(deleteRef).then(()=>{
                    console.log('파일 삭제 성공');
                    setRenderFlag(!renderFlag); // true 로 바뀜
                  })
                  .catch((error) => {
                    console.log('파일 삭제 실패 ', error);
                  });
                }
              }}>삭제</button> </td>
            </tr>
          );
        });
        setFileLists(fileRows);

      })
      .catch((error) => {
        console.log('파일 목록 출력 중 에러 발생 ', error);
      });
  },[renderFlag]);

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
            <th>삭제</th>
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