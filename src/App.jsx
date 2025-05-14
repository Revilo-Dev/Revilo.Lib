import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css'
import './wrapper.css'
import useThemeStore from './store/ThemeStore.js';
import ThemeDropdown from './components/ThemeDropDown.jsx';



function App() {
  const {theme} = useThemeStore()
  return (
    <Router>
      <div data-theme={theme}>
        
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/Links">Links</Link>
          <ThemeDropdown />
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Links" element={<Links />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>

      </div>
    </Router>
    
  );
}

function Home() {

  return (
    <>
    {/*body*/}
    <div className='body'>
    {/*title*/}
      <div>
        <div className='logo'>
        <img  src='src/assets/logo.png'></img>
        </div>
        <h1><b>Revilo.Lib</b></h1>
        <p >React Web Development Library</p>
      </div>

      <div>
        <h3>Apps built in Revilo.Lib</h3>
      </div>

      <div className="wrapper">
        <a className="item item1" href='https://revilodev.web.app/'><h3>Revilo.Dev.Com</h3></a>
        <a className="item item2" href='https://stacks-j2s9.onrender.com/'><h3>Stacks - Chat App</h3></a>
        <a className="item item3" href='https://itch-webgames.web.app/'><h3>Itch.WebGames</h3></a>
        <a className="item item4" href='https://revilodev.web.app/'><h3>Revilo.Dev.Com</h3></a>
        <a className="item item5" href='https://stacks-j2s9.onrender.com/'><h3>Stacks - Chat App</h3></a>
        <a className="item item6" href='https://itch-webgames.web.app/'><h3>Itch.WebGames</h3></a>
        <a className="item item7" href='https://revilodev.web.app/'><h3>Revilo.Dev.Com</h3></a>
        <a className="item item8" href='https://stacks-j2s9.onrender.com/'><h3>Stacks - Chat App</h3></a>
      </div>
      
      
    </div>

    </>
  )
}

function Projects() {
  return (
    <div className='body'>
      <div className='logo'>
        <img  src='src/assets/logo.png'></img>
      </div>
      <h1>Features</h1>
      <h3>All Features and fucntions of Revilo.Lib</h3>
      <br></br>
      <h2>DaisyUI Themes</h2>
      <p>All 29 DaisyUI themes with prefrence and local save system</p>
      <br></br>
      <h2>DaisyUI Themes</h2>
      <p>All 29 DaisyUI themes with prefrence and local save system</p>


    </div>
  );
}

function Links() {
  return (
    <div className='body'>
      <div className='logo'>
        <img  src='src/assets/logo.png'></img>
      </div>
      <h1>Links</h1>
      <h3>Socials, projects, ect</h3>
    </div>
  );
}

function NoMatch() {
  return (
    <div className='body'>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/"><button>Back to Home</button></Link>
      </p>

      
    </div>
  );
}

export default App;

