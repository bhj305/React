import React from "react";

function ComWrite(props){
  return (<>
    <form onSubmit={(event) => {
      event.preventDefault();
//  이벤트 객체를 통해 폼 값 가져오기 
      let writer = event.target.writer.value;
      let comment = event.target.comment.value;
      event.target.writer.value = '';
      event.target.comment.value = '';
      props.writeAction(writer,comment);

    }}>
      <table id="boardTable">
        <tbody>
          <tr>
            <td id="writer">Writer : <input type="text" name="writer"/></td>
            <td rowSpan="2"><input type="submit" value="댓글작성" id="btn"/></td>
          </tr>
          <tr>
            <td><textarea name="comment" cols="51" rows="5" ></textarea></td>
          </tr>
        </tbody>
      </table>        
    </form>
  </>);
}

export default ComWrite;  
