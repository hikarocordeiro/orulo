import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './config/ReactotronConfig';

import GlobalStyle from './styles/globals';
import Header from './components/Header';
import Routes from './routes';

import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Header />
          <Routes />
          <GlobalStyle />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
