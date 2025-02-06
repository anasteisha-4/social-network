import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import Music from './components/Music/Music';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Sidebar from './components/Sidebar/Sidebar';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Sidebar state={props.store.state.sidebarPage} />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/profile"
              element={
                <Profile
                  state={props.store.state.profilePage}
                  addPost={props.store.addPost.bind(props.store)}
                  updateNewPostText={props.store.updateNewPostText.bind(
                    props.store
                  )}
                />
              }
            />
            <Route
              path="/messages/*"
              element={
                <Messages
                  state={props.store.state.messagesPage}
                  sendMessage={props.store.sendMessage.bind(props.store)}
                  updateNewMessageText={props.store.updateNewMessageText.bind(
                    props.store
                  )}
                />
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
