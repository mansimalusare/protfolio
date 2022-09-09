import './App.css';
import Intro from './compoents/intro/intro';
import About from './compoents/intro/about/About';
import Contact from'./compoents/contact/contact';
import Toggle from './compoents/toggle/Toggle';
import { useContext } from 'react';
import { ThemeContext } from './context';
function App() {
    const theme = useContext(ThemeContext);
    const darkMode= theme.state.darkMode;
  
  return (
    <div style={{backgroundColor: darkMode ?"#222":"white"}}>
      <Toggle />
      <Intro/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
