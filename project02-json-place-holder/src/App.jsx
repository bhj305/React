import { useEffect, useState } from 'react'
import './App.css'

const ListTop = (props) => {
  var [myList, setMyList] = useState([]);
  useEffect(function () {
    fetch('https://jsonplaceholder.typicode.com/albums/100/photos')
    .then((result) => {
      return result.json();
    })
    .then((json)=>{
      console.log(json);
      setMyList(json);
    });
    return () => {
      console.log("#Life", 'LifeGood ==> 4. useEffect 실행2');
    }
  }, []);

  var listTag = [];
  for (let i = 0; i < myList.length; i++) {
    var data = myList[i];
    listTag.push(
      <tr key={data.id}>
        <td><img src='/public/favicon.ico'alt={data.title} width='80px' /></td>
        <td><a href="/" data-id={data.id} onClick={ (e) => {
          e.preventDefault();
          props.myLinkClick(e.target.dataset.id);
        }}>{data.title}</a></td>
      </tr>
    );
  }
  console.log("#Life", 'LifeGood ==> 2. return 실행(render와 동일)');
  return (
    <div id='contactList'>
      <table border='1' className='table table-bordered table-striped'>
        <colgroup><col width="20%"/><col width="*"/></colgroup>
        <thead>
          <tr className='text-center'>
            <th>photo</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>{listTag}</tbody>
      </table>
    </div>
  );
}

const ContentBody = (props) => {
  return (
    <div id='contactView'>
      <h2>{props.myResult.name}</h2>
      <ul className='list-group list-group-flush list-hover'>
        <li className='list-group-item list-group-item-action'>
          albumId : {props.myResult.albumId}
        </li>
        <li className='list-group-item list-group-item-action'>
          id : {props.myResult.id}
        </li>
        <li className='list-group-item list-group-item-action'>
          title : {props.myResult.title}
        </li>
        <li className='list-group-item list-group-item-action'>
          url : {props.myResult.url}
        </li>
        <li className='list-group-item list-group-item-action'>
          thumbnailUrl :  <img src='/public/logo192.png' alt={props.myResult.title} className='myImg'/>
        </li>
        {/* <li className='list-group-item list-group-item-action'>
          thumbnailUrl :  <img src={props.myResult.thumbnailUrl} alt={props.myResult.title} className='myImg'/>
        </li> */}
      </ul>
    </div>
  );
}
function App() {
  var [myResult, setMyResult] = useState({});
  return (
    <div className='contaoner'>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
      <h2>연락처 Api 연동하기</h2>
      <div className='row'>
        <div className='list col-sm-6'>
          <ListTop myLinkClick = { (no)=>{
            console.log('클릭', no);
            fetch('https://jsonplaceholder.typicode.com/photos/'+no)
            .then((result) =>{
              return result.json()
            })
            .then((json) =>{
              console.log('결과', json);
              setMyResult(json);
            });
          }}></ListTop>
        </div>
        <div className='col-sm-6'>
          <ContentBody myResult={myResult} ></ContentBody>
        </div>
      </div>
    </div>
  );
}

export default App