// 반드시 import 해주기
import React from "react";

// 수정페이지의 내비게이션
function NavEdit(props){
  return(
    <nav>
      <a href="/" onClick={ function (event){
        event.preventDefault();
        props.onBack();
      }}>뒤로</a>

      <a href="/" onClick={ function (event){
        event.preventDefault();
        props.onChangeMode();
      }}>목록</a>
    </nav>
  );
}

// 반드시 export 해주기
export default NavEdit;