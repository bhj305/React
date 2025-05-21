// 반드시 import 해주기
import React from "react";

// 쓰기의 내비게이션
function NavWrite(props){
  return(
    <nav>
      <a href="/" onClick={ function (event){
        event.preventDefault();
        props.onChangeMode();
      }}>목록</a>
    </nav>
  );
}

// 반드시 export 해주기
export default NavWrite;