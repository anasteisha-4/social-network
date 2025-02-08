import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MessagesContainer from './components/Messages/MessagesContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <SidebarContainer />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages/*" element={<MessagesContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
