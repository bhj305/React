import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import AddPlayerForm from './components/AddPlayerForm';
import Player from './components/Player';

function App() {
  // 데이터로 사용할 객체형 배열을 State로 정의 
  const [playerData, setPlayerData] = useState([
    {idx: 1, name: '홍길동', score: 10},
    {idx: 2, name: '손오공', score: 20},
    {idx: 3, name: '유비', score: 30},
    {idx: 4, name: '달타냥', score: 40},
  ]);
// 시퀀스로 사용할 State 생성 
  const [nextVal, setNextVal] = useState(5);
  // player 추가를 위한 함수 정의
  const addPlayerProcess = (pName) => {
    console.log('onAddPlayer', pName);

    if(pName == '') {
      alert('플레이어의 이름은 필수값입니다. ');
    } else {

      let addPlayer = {idx: nextVal, name: pName, score: 0};
  
      let copyPlayers = [...playerData];
      copyPlayers.push(addPlayer);
      setPlayerData(copyPlayers);
  
      // playerData.push(addPlayer);
      // setPlayerData(players);
      // console.log(players);
  
      setNextVal(nextVal+1);
    }

  }

  return (
    <div className="scoreboard">
      <Header title="My Scoreboard" playersData={playerData}/>
      {
        playerData.map((playerRow) => (
          <Player playerData={playerRow} />
        ))  
      }
      <AddPlayerForm onAddPlayer={addPlayerProcess}></AddPlayerForm>
    </div>
  );
}

export default App;
