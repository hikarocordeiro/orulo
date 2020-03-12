import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './modules/rootReducer';

const persistConfig = {
  key: 'orulo_favorites',
  storage,
};

const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);

export { store, persistor };
