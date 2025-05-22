import React from "react";
import {useState} from 'react';

function ComEdit(props){

  const [writer, setWriter] = useState(props.selectData.writer);
  const [comment, setComment] = useState(props.selectData.comment);

  return (<>
    <form onSubmit={(event) => {
      event.preventDefault();
      let writer = event.target.writer.value;
      let comment = event.target.comment.value;
      event.target.writer.value = '';
      event.target.comment.value = '';
      props.editAction(writer, comment);
    }}>
      <table id="boardTable">
        <tbody>
          <tr>
            <td id="writer">Writer : 
              <input type="text" name="writer" value={writer} 
                onChange={(event) => {
                  setWriter(event.target.value);
                }
              }/>
              <input type="button" value="수정취소" onClick={()=>{
                props.changeMode('list', null);
              }}></input>
              </td>
            <td rowSpan="2"><input type="submit" value="댓글수정" id="btn"/></td>
          </tr>
          <tr>
            <td><textarea name="comment" value={comment} 
              onChange={(event)=>{
                setComment(event.target.value);
              }}></textarea>
            </td>
          </tr>
        </tbody>
      </table>        
    </form>
  </>);
}

export default ComEdit;  
