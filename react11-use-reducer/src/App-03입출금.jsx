import { useReducer, useState } from 'react';
import './App.css'

const ActionTypes = {
  depo : 'deposit',
  with : 'withdraw'
}

const myReducer = (nowState, myAction) => {
  console.log('Called Reducer Function .. ', nowState, myAction);
  switch (myAction.mode) {
    case ActionTypes.depo:
      return nowState + myAction.amount;
    case ActionTypes.with:
      return nowState - myAction.amount;
    default:
      return nowState;
  }
}

function App() {
  const [number, setNumber] = useState(0);
  const [money, myDispatch] = useReducer(myReducer, 0); //money: current state(current account values)

  return (
    <div className='App'>
      <h2>useReducer App</h2>
      <p>Balance: { money } KRW</p>

      <input type="number" value={number} step={ 1000 }  onChange={ (e) => {
        setNumber(parseInt(e.target.value));
      }}/>
      <button type='button' onClick={ ()=> {
        myDispatch({mode: ActionTypes.depo, amount:number});
      }}>Deposit</button>
      <button type='button' onClick={ ()=> {
        myDispatch({mode: ActionTypes.with, amount:number});
      }}>Withdraw</button>
    </div>
  )
}

export default App