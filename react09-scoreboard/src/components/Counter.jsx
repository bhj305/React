import React from "react";

export default function Counter(props) {
  return (<>
    {/* <div className="counter">
      <button className="counter-action decrement"
        onClick={() => { alert('점수차감'); }}> -</button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment"
        onClick={() => { alert('점수증가'); }}> +</button>
    </div> */}

    <div className="counter">
      <button className="counter-action decrement" 
        onClick={(e) => {
          console.log('-버튼', props.id);
          props.onChangeScore('-', props.idx);
      }}> - </button>
      
      <span className="counter-score">{props.score}</span>

      <button className="counter-action decrement" 
        onClick={(e) => {
          console.log('+버튼', props.id);
          props.onChangeScore('+', props.idx);
      }}> + </button>
    </div>
  </>);
}