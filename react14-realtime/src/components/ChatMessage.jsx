import '../Chat.css'
import { child, onValue, push, ref, set } from "firebase/database";
import { realtime } from "../realtimeConfig";
import { useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const scrollTop = (chatWindow) => {
  console.log('scrollTop 호출됨.');
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function ChatMessage () {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(setSearchParams);
  // 2 개의 파라미터 읽어오기 
  const roomId = searchParams.get('roomId');
  const userId = searchParams.get('userId');
  // 채팅내역이 보여지는 부분의 DOM 참조
  const chatWindow = useRef();
  const [chatData, setChatData] = useState('');
  
  function messageWrite (chatRoom, chatId, chatMessage){
    const newPostKey = push(child(ref(realtime), 'tempValue')).key;
    set(ref(realtime, chatRoom + '/' + newPostKey), {
      id: chatId,
      message: chatMessage
    });
    console.log('입력성공');
  }

  const dbRef = ref(realtime, roomId);
  useEffect(()=>{
    onValue(dbRef, (snapshot) => {
      let showDiv = [];
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        console.log('리스너', childKey, childData.id, userId);

        if(childData.id === userId){
          showDiv.push(<div className='myMsg' style={{'textAlign': 'right'}}>{childData.message}</div>);
        } else {
          showDiv.push(<div>{childData.message}</div>);
        }
        scrollTop(chatWindow.current);
      });
      setChatData(showDiv);
    });
  }, []);

  return(<>
    <div className="App">
      <h2>Realtime Chat</h2>
      대화명: {userId} &nbsp;&nbsp;
      <button id="closeBtn" onClick={()=> {window.self.close();}}>채팅종료</button>
      <div id="chatWindow" ref={chatWindow}>
        {chatData}
      </div>
      <div>
          <form onSubmit={(e) => {
            e.preventDefault();
            let chatRoom = e.target.chatRoom.value;
            let chatId = e.target.chatId.value;

            if(chatId === ''){
              alert('대화명을 입력하세요.');
              return;
            }
            let message = e.target.message.value;
            if(message === ''){
              alert('메세지를 입력하세요.');
              return;
            }
            console.log('submit', chatRoom, chatId, message);
            messageWrite(chatRoom, chatId, message);
            e.target.message.value = '';

          }}>
            <input type="hidden" name="chatRoom" value={roomId} />
            <input type="hidden" name="chatId" value={userId} />
            <input type="text" name="message" />
            <button type="submit">전송</button>
          </form>
      </div>
    </div>
  </>);
}


export default ChatMessage