import { useState } from 'react';
import './App.css'

// 자식 컴포넌트에게 isDark, setIsDark 전달
const Page = ({ isDark, setIsDark }) => {
  return (
    <div className='page'>
      <Header isDark={isDark}></Header>
      <Content isDark={isDark}></Content>
      <Footer isDark={isDark} setIsDark={setIsDark}></Footer>
    </div>
  );
}

const Header = ({isDark}) => {
  return (
    <header className='header'
      style={ {
        backgroundColor: isDark ? 'black' : 'lightyellow',
        color : isDark ? 'white' : 'black'
      }}
      >
        <h1>Welcome LOL !!</h1>
      </header>
  );
}

const Content = ({isDark}) => {
  return (
    <header className='content'
      style={ {
        backgroundColor: isDark ? 'black' : 'lightblue',
        color : isDark ? 'white' : 'black'
      }}
      >
        <h1>Hello !!</h1>
      </header>
  );
}

const Footer = ({isDark, setIsDark }) => {
  const toggleTheme = () => {
    setIsDark(!isDark);
  }

  return (
    <div className='footer'
      style={{
        backgroundColor : isDark ? 'black' : 'lightpink'
      }}
      >
        <input type="button" value="Dark Mode" className='button'
          onClick={toggleTheme}/>
      </div>
  );
}

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className='App'>
      <Page isDark={isDark} setIsDark={setIsDark}></Page>
    </div>
  );
}

export default App