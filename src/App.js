

import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/Nav';
import Profile from './components/Profile/MyPost/MyPost';
import Dialogs from './components/Dialogs/Dialogs';
import Settings from './components/Settings/Settings';
import { Routes, Route } from "react-router-dom";





const App = (props) => {



  return (

    <div className='wrapper'>

      <Header />
      <NavBar />

      <div className='wrapper_content'>

        <Routes>
          <Route path='/profile' element={<Profile post={props.post} />} />;
          <Route path='/dialogs' element={<Dialogs props={props.props} message={props.message} />} />;
          <Route path='/settings' element={<Settings />} />;
          <Route path='*' element={<Dialogs props={props.props} message={props.message} />} />;


        </Routes>
      </div>

    </div>


  );
}





export default App;
