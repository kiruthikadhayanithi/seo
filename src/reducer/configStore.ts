import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { configureStore } from '@reduxjs/toolkit';

import appReducer from './index';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer: any = persistReducer(persistConfig, appReducer);

export const store = configureStore({ reducer: persistedReducer });
export const persistor = persistStore(store);
