import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import appReducer from './index';
import { applyMiddleware, compose } from 'redux';

const composeEnhancers = compose;

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, appReducer)

// export const store = configureStore({
//   reducer: appReducer,
//   ...composeEnhancers(applyMiddleware(thunk)),
// });

const store = () =>
  configureStore({
    reducer: appReducer,
    ...composeEnhancers(applyMiddleware(thunk)),
  });
// export const persistor = persistStore(store)

// import { createStore, applyMiddleware, compose } from 'redux';

// const configureStore = () => createStore( appReducer, composeEnhancers(applyMiddleware(thunk)) );

export default store;
