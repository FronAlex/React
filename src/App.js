

import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/Nav';
import Profile from './components/Profile/MyPost/MyPost';
import Dialogs from './components/Dialogs/Dialogs';






const App = () => {
  return (
    <div className='wrapper'>

      <Header />
      <NavBar />

      <div className='wrapper_content'>
        <Profile />
        {/* <Dialogs /> */}
      </div>



    </div>

  );
}





export default App;
