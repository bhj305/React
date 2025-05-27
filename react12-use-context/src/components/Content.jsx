import { useContext } from "react";
import { SimpleContext } from "../context/SimpleContext";
import { ThemeContext } from "../context/ThemeContext";

const Content = () => {
  const {isDark} = useContext(ThemeContext);
  const userMessage = useContext(SimpleContext);

  return (
    <header className='content'
      style={ {
        backgroundColor: isDark ? 'black' : 'lightblue',
        color : isDark ? 'white' : 'black'
      }}
      >
        <p>{userMessage} !!</p>
      </header>
  );
}

export default Content