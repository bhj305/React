// import { useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { legacy_createStore as createStore } from 'redux'; // 리덕스 스토어를 생성하기 위한 패키지
import './App.css'

// react로 제작한 애플리케이션의 상태관리를 위한 라이브러리, 써드 파티로 제공되므로 별도로 설치해야 함.
function reducer(currentState, action){
  if(currentState === undefined){
    return {
      number : 1,
    };
  }
  const newState = {...currentState};

  if(action.type === 'PLUS'){
    newState.number ++;
  } 

  return newState; // 변경된 state 반환하여 적용
  
}
const store = createStore(reducer);


function Right1 () {
  return (
    <div>
      <h2>Right1</h2>
      <Right2></Right2>
    </div>
  );
}

function Right2() {
  return (
    <div>
      <h2>Right2</h2>
      <Right3></Right3>
    </div>
  );
}

function Right3() {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Right3</h2>
      <input type="button" value='+' onClick={()=>{
        dispatch({ type : 'PLUS'})
      }} />
    </div>
  );
}

const Left1 =() => {
  return (
    <div>
      <h2>Left1</h2>
      <Left2></Left2>
    </div>
  );
}

const Left2 =() => {
  return (
    <div>
      <h2>Left2 </h2>
      <Left3></Left3>
    </div>
  );
}
const Left3 =() => {
  const number = useSelector((state) => {return state.number});
  return (
    <div>
      <h2>Left3: {number}</h2>
    </div>
  );
}


function App() {
  // const [number, setNumber] = useState(1);
  return (
    <div className='App'>
      <h2>React - Redux</h2>
      <div id='grid'>
        <Provider store={ store }>
          <Left1></Left1>
          <Right1></Right1>
        </Provider>
      </div>
    </div>
  );
}

export default App