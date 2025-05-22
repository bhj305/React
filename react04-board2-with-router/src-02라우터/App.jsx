import './App.css'
import { Route, Link, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function List(props) {
  return (
    <>
    <header>
    <h2>게시판 - 목록</h2>
  </header>
  <nav>
    {/* <a href="/">글쓰기</a> */}
    <Link to="/write">글쓰기</Link>
  </nav>
  <article>
    <table id="boardTable">
      <thead>
        <tr>
          <th>No</th>
          <th>제목</th>
          <th>작성자</th>
          <th>날짜</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="cen">1</td>
          <td><Link to='/view'>오늘은 React 공부하는 날</Link></td>
          <td className="cen">홍길동</td>
          <td className="cen">2025-05-20</td>
        </tr>
        <tr>
          <td className="cen">2</td>
          <td><Link to='/view'>오늘은 JS 공부하는 날</Link></td>
          <td className="cen">임꺽정</td>
          <td className="cen">2025-05-22</td>
        </tr>
        <tr>
          <td className="cen">3</td>
          <td><Link to='/view'>오늘은 JSP 공부하는 날</Link></td>
          <td className="cen">전우치</td>
          <td className="cen">2025-05-24</td>
        </tr>
      </tbody>
    </table>
  </article>
    </>
  );
}

function View(props){
  return(<>
    <header>
      <h2>게시판 - 읽기</h2>
    </header>
    <nav>
      {/* <a href="/list">목록</a> &nbsp;
      <a href="/edit">수정</a> &nbsp;
      <a href="/delete">삭제</a> */}
      <Link to="/list">목록</Link> &nbsp;
      <Link to="/edit">수정</Link> &nbsp;
      <Link to="/delete">삭제</Link>
    </nav>
    <article>
      <table id="boardTable">
        <tbody>
          <tr>
            <td>작성자</td>
            <td>성유겸</td>
          </tr>
          <tr>
            <td>제목</td>
            <td>오늘은 React 공부하는 날</td>
          </tr>
          <tr>
            <td>날짜</td>
            <td>2025-05-20</td>
          </tr>
          <tr>
            <td>내용</td>
            <td>열심히 해봅시도오<br/>열공합시도오</td>
          </tr>
        </tbody>
      </table>
    </article>
  </>);
}

function Write(props){
  return(
    <>
      <header>
        <h2>게시판 - 작성</h2>
      </header>
      <nav>
        {/* <a href="/list">목록</a> */}
        <Link to="/list">목록</Link>
      </nav>
      <article>
        <table id="boardTable">
          <tbody>
            <tr>
              <td>작성자</td>
              <td><input type="text" name="writer"/></td>
            </tr>
            <tr>
              <td>제목</td>
              <td><input type="text" name="title"/></td>
            </tr>
            <tr>
              <td>내용</td>
              <td><textarea name="contents" cols="2" rows="3"></textarea></td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="전송"/>
      </article>
    </>
  );
}

function NotFound(){
  return(
    <div>
      <h2>Not Found</h2>
      <p>
        페이지를 찾을 수 없습니다.<br/>
        <Link to ='/list'>Home</Link>
      </p>
    </div>
  );
}


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<List></List>} />
          <Route path='/list' element={<List></List>} />
          <Route path='/view' element={<View></View>} />
          <Route path='/write' element={<Write></Write>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
