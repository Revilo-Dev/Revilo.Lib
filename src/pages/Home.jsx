import React from 'react';

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

export default Home;