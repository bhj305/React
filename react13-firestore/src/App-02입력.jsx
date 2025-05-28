import { doc, setDoc } from 'firebase/firestore';
import './App.css'
import { firestore } from './firestoreConfig'

function App() {
  console.log('firestore' ,firestore);
  const nowDate = () => {
    let dateObj = new Date();
    var year = dateObj.getFullYear();
    var month = ("0" + (1+dateObj.getMonth())).slice(-2);
    var day = ("0"+dateObj.getDate()).slice(-2);
    return year + "-" + month + "-" + day;
  }

  // 비동기 방식: 특정 코드가 끝날때 까지 코드의 실행을 멈추지 않고 다음 코드를 먼저 실행하는 것
  const memberWrite = async (p_collection, p_id, p_pass, p_name) => {
    await setDoc(doc(firestore, p_collection, p_id), {
      id : p_id,
      pass : p_pass,
      name : p_name,
      regdate: nowDate(),
    });
    console.log('입력성공');
  }

  return (
    <div className='App'>
      <h2>Firebase - firestore 연동 App</h2>
      <h3>입력하기</h3>
      <form onSubmit= {(event) => {
        event.preventDefault(); // 바로 실행되지 않도록 이벤트 멈추기

        // 입력폼값 가져오기
        let collection = event.target.collection.value;
        let id = event.target.id.value;
        let pass = event.target.pass.value;
        let name = event.target.name.value;
        // 보내기 전에 유효성 검증해주기
        if(id === ''){alert('아이디를 입력하세요.'); return;}
        if(pass === ''){alert('비밀번호를 입력하세요.'); return;}
        if(name === ''){alert('이름을 입력하세요.'); return;}

        memberWrite(collection, id, pass, name); // memberWrite로 값 보내주기

        // 재 입력을 위해 input 비워주기 
        event.target.id.value = '';
        event.target.pass.value = '';
        event.target.name.value = '';

      }}>
        <table className='table table-bordered table-striped'>
          <tbody>
            <tr>
              <td>컬렉션(테이블)</td>
              <td>
                <input type="text" name='collection' 
                      defaultValue="members" className='form-control'/> 
                      {/* 테이블 이름: members 으로 고정 */}
              </td>
            </tr>

            <tr>
              <td>아이디</td>
              <td> <input type="text" name='id' className='form-control' /> </td>
            </tr>

            <tr>
              <td>비밀번호</td>
              <td><input type="password" name='pass' className='form-control' /></td>
            </tr>

            <tr>
              <td>이름</td>
              <td><input type="text" name='name' className='form-control' /></td>
            </tr>
          </tbody>
        </table>
          <button type='submit'>입력</button>
      </form>
    </div>
  );
}

export default App