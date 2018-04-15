import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers/rootReducer'

const STORE = createStore(
  reducer
)

ReactDOM.render(
  <Provider store={STORE}>
    <App />
  </Provider>,
  document.getElementById('root'));
