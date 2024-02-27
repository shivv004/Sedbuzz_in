import React from 'react'
import ReactDOM from 'react-dom/client'
import { hydrate, render } from "react-dom";
import App from './App.jsx'
import './index.css'
import { store, persistor } from './redux/store.jsx'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const App1 = (
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <App />
    </Provider>
  </PersistGate>
);
 
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(App1, rootElement);
} else {
  render(App1, rootElement);
}
