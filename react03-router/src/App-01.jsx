import './App.css';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const TopNavi = () =>{
  return (
    <nav>
      <NavLink to='/'>HOME</NavLink> &nbsp;
      <NavLink to='/intro'>INTRO</NavLink> &nbsp;
      <NavLink to='/intro/router'>ROUTER 관련 Hook</NavLink> &nbsp;
      <NavLink to='/xyz'>잘못된 URL</NavLink>
    </nav>
  );
}

const CommonLayout = () => {
  return (
    <div>
      <header style={{background: 'lightgray', padding: '10px'}}>
        Outlet 컴포넌트 알아보기 
      </header>
      <article>
        <Outlet></Outlet>
        <footer style={{background: 'lightgray', padding: '10px'}}>
          공통 레이아웃
        </footer>
      </article>
    </div>
  );
}

const Home = () => {
  return (
    <>
      <h2>React Home</h2>
      <p>
        React Router에 대해 학습합니다.
      </p>
    </>
  );
}

const LayoutIndex = () => {
  return (
    <>
      <h2>레이아웃 인덱스 페이지</h2>
      <ul>
        <li>Outlet 컴포넌트 위치에 출력됩니다.</li>
        <li>Route 설정 시 index 로 지정합니다.</li>
      </ul>
    </>
  );
}

const RouterHook = () => {
  return (
    <>
      <h2>라우터 관련 Hook</h2>
    </>
  );
}

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>
        페이지를 찾을 수 없습니다.<br/>
        <Link to ='/'>Home</Link>
      </p>
    </div>
  );
}


function App() {
  return (
    <div className='App'>
      <h1>React 기본형</h1>
      {/* 전체페이지에서 공통으로 출력하는 용도로 선언 */}
      <TopNavi></TopNavi> 
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/intro' element={<CommonLayout />}>
          <Route index element={<LayoutIndex />} />
          <Route path='router' element={<RouterHook />} />
        </Route>
        {/* 지정되지 않은 모든 경로는 404 처리 */}
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>
    </div>
  )
}

export default App
