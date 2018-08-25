import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import employeeReducer from './employees/reducer';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(employeeReducer, 
    {}, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}>
    <App store={store} />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
