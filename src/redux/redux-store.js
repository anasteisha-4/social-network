import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './messagesReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReduces';

const reducer = {
  profile: profileReducer,
  messages: messagesReducer,
  sidebar: sidebarReducer,
  users: usersReducer
};

const store = configureStore({
  reducer
});

export default store;
