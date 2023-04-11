import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactSlice';
import filterReducer from './filterSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddlewares =>
    [...getDefaultMiddlewares(), logger],
  devtools: process.env.NODE_ENV === 'development', //devtools on only in dev.mode
});

