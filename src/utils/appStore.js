import { configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import userReducer from './cartSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

const appStore = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(appStore);

export default appStore;
