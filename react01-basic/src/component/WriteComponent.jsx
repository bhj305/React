import React from "react"; // 컴포넌트 모듈화를 위해 제일 먼저 필요한 React 임포트 구문

function WriteComponent(props){
  return (
    <>
      <header>
        <h2>게시판 - 작성</h2>
      </header>
      <nav>
        <a href="/" onClick={(event) => {
          event.preventDefault();
          props.changeMode('list');
        }}>목록</a>
      </nav>
      <article>
        <form>
        <table id="boardTable">
          <tbody>
            <tr>
              <td className="cen">작성자</td>
              <td><input type="text" name="writer"/></td>
            </tr>
            <tr>
              <td className="cen">제목</td>
              <td><input type="text" name="title"/></td>
            </tr>
            <tr>
              <td className="cen">내용</td>
              <td><textarea name="contents" cols="22" rows="3"></textarea></td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="전송"></input>
        </form>
      </article>
    </>
  );
}

export default WriteComponent;