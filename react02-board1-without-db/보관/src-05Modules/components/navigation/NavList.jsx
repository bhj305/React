// 반드시 import 해주기
import React from "react";

// 목록의 내비게이션
function NavList(props){
  return(
    <nav>
      <a href="#" onClick={ function (event){
        event.preventDefault();
        props.onChangeMode();
      }}>글쓰기</a>
    </nav>
  );
}

// 반드시 export 해주기
export default NavList;