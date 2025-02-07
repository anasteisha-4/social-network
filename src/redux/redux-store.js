import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './messagesReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';

const reducer = {
  profile: profileReducer,
  messages: messagesReducer,
  sidebar: sidebarReducer
};

const store = configureStore({
  reducer
});

export default store;
