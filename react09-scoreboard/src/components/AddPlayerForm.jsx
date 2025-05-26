import React from "react";

export default function AddPlayerForm(props) {
  console.log(props);
  
  return (<>
    <form className="form" noValidate
    onSubmit={(e) => {
      e.preventDefault();

      if(e.target.player.value === ''){
        alert('이름을 입력하세요');
        e.target.player.focus();
        return;
      }

      let playerName = e.target.player.value;
      console.log('playerName', playerName)
      props.onAddPlayer(playerName);
      e.target.player.value='';
    }}>
      <input type="text" name="player" minLength="10" className="input" 
        placeholder="이름을 추가하세요" required onChange={()=>{}} />
      <input type="submit" className="input" value="Add Player"
        onClick={()=>{ alert('선수추가'); }} />
    </form>
  </>);
}