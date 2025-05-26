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
    
    let addPlayer = {idx: nextVal, name: pName, score: 0};
    let copyPlayers = [...playerData];
    copyPlayers.push(addPlayer);
    setPlayerData(copyPlayers);

    // playerData.push(addPlayer);
    // setPlayerData(players);
    // console.log(players);

    setNextVal(nextVal+1);

  }

  // 플레이어 점수 변경
  const scoreChangeProcess = (flag, playerIdx) => {
    console.log('idx', playerIdx, 'flag', flag);

    let copyPlayers = [...playerData];
    copyPlayers.forEach((row) => {
      // console.log(row.idx, row.name);
      // 점수 변경을 위한 플레이어 비교 
      if(row.idx === playerIdx){
        // console.log(row.name);
        // 플레그에 따라 5점씩 증가
        if(flag === '+'){
          row.score += 5;
        } else {
          row.score -= 5;
        }

        if(row.score  < 0){
          alert('최소 점수는 0점입니다.');
          row.score = 0;
        }

      }
    });
    setPlayerData(copyPlayers);
  } 

  const deletePlayerProcess = (playerIdx) => {
    console.log('삭제 idx', playerIdx);

    let newPlayerData = playerData.reduce((prev, curr) => {
      if (curr.idx != playerIdx){
        prev.push(curr);
      }
      return prev;
    }, []);
    console.log(newPlayerData);
    setPlayerData(newPlayerData);
  }

  const editPlayerProcess = (idx, name) => {
    console.log('수정', idx, name);
    let newPlayerData = playerData.filter((row) => {
      if(row.idx === idx) {
        row.name = name;
      }
      return row;
    });
    setPlayerData(newPlayerData);
  }


  return (
    <div className="scoreboard">
      <Header title="My Scoreboard" playersData={playerData}/>
      {
        playerData.map((playerRow) => (
          <Player playerData={playerRow} key={playerRow.idx} 
          onChangeScore={scoreChangeProcess} 
          onDeletePlayer = {deletePlayerProcess}
          onEditPlayer = {editPlayerProcess}/>
        ))  
      }
      <AddPlayerForm onAddPlayer={addPlayerProcess}></AddPlayerForm>
    </div>
  );
}

export default App;
