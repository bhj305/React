import { useId } from 'react';
import './App.css'

function App() {
  const myId = useId();
  console.log('myId', myId);

  return (
    <div className='App'>
      <MyInput></MyInput>
    </div>
  )
}

function MyInput () { 
  const ageId = useId();
  console.log('ageId', ageId);
  return(
    <div>
      {/* html 속성을 사용하여 연결 */}
      <label htmlFor="name">이름</label>
      <input type="text" id='name' /> <br/>

      <label htmlFor={ageId}>나이</label>
      <input type="text" id={ageId} /> <br/>
    </div>
  );
}


export default App