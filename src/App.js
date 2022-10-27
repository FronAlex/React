

import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/Nav';
import Profile from './components/Profile/MyPost/MyPostContainer';
import Settings from './components/Settings/Settings';
import { Routes, Route } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {

  return (
    <div className='wrapper'>
      <Header />
      <NavBar />
      <div className='wrapper_content'>
        <Routes>
          <Route path='/profile' element={<Profile />} />;
          <Route path='/dialogs' element={<DialogsContainer />} />;
          <Route path='/settings' element={<Settings />} />;
          <Route path='/users' element={<UsersContainer />} />;
          <Route path='*' element={<DialogsContainer />} />;
        </Routes>
      </div>

    </div>
  );
}


export default App;


