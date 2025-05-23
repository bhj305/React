import './App.css';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { Link, NavLink, Route, Routes } from 'react-router-dom';

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

const RouterHooks = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const mode = searchParams.get('mode');
  const pageNum = searchParams.get('pageNum');
// 파라미터 mode의 값을 토글 시켜주는 함수 정의
  const changeMode = () => {
    const nextMode = (mode === 'list') ? 'view' : 'list';
    // 파라미터 변경을 위한 setXX 함수를 통해 값을 변경시킴.pageNum의 경우 값이 지정되지 않았으므로 기존의 값 유지
    setSearchParams({
      mode : nextMode,
      pageNum
    });
  }

  const nextPage = () => {
    let pageTemp = (pageNum === null || isNaN(pageNum)) ? 1 : parseInt(pageNum) + 1 ;
    if(pageTemp === 11){
      pageTemp = 10;
      window.alert('마지막 페이지 입니다.');
    }
    setSearchParams({
      mode,
      pageNum: pageTemp
    });
  }


  const prevPage = () => {
    let pageTemp = (pageNum === null || isNaN(pageNum)) ? 1 : parseInt(pageNum) - 1 ;
    if(pageTemp === 0){
      pageTemp = 1;
      window.alert('첫번째 페이지 입니다.');
    }
    setSearchParams({
      mode,
      pageNum: pageTemp
    });
  }

  return (
    <>
      <h2>라우터 관련 Hook</h2>
      <div>
        <ul>
          <li>URL: { location.pathname }</li>
          <li>쿼리스트링: { location.search }</li>
          <li>Mode: { mode }</li>
          <li>Details : { pageNum }</li>
        </ul>
        <button onClick={ changeMode }>모드 변경</button>
        <button onClick={ prevPage }>이전 페이지</button>
        <button onClick={ nextPage }>다음 페이지</button>
      </div>
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


function App() { //App
  return (
    <div className='App'>
      <h1>React 기본형</h1>
      {/* 전체페이지에서 공통으로 출력하는 용도로 선언 */}
      <TopNavi></TopNavi> 
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/intro' element={<CommonLayout />}>
          <Route index element={<LayoutIndex />} />
          <Route path='router' element={<RouterHooks />} />
        </Route>
        {/* 지정되지 않은 모든 경로는 404 처리 */}
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>
    </div>
  )
}

export default App
