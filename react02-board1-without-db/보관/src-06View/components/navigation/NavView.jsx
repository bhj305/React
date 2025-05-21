// 반드시 import 해주기
import React from "react";

// 읽기의 내비게이션
function NavView(props){
  return(
    <nav>
      <a href="/" onClick={function(event){
        event.preventDefault(); // 부모가 전달해준 함수를 받음
        props.onChangeMode('list');
      }}>목록</a>&nbsp;
      <a href="/" onClick={function(event){
        event.preventDefault(); // 부모가 전달해준 함수를 받음
        props.onChangeMode('edit');
      }}>수정</a>{" "}
      <a href="/" onClick={function(event){
        event.preventDefault(); // 부모가 전달해준 함수를 받음
        props.onChangeMode('delete');
      }}>삭제</a>
    </nav>
  );
}

// 반드시 export 해주기
export default NavView;