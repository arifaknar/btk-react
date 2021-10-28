import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './redux/reducers/configureStore';

const store=configureStore()
ReactDOM.render(
  <Provider store={store}><App /> </Provider> // Reducerlarımızı ana componentimize bağlayıp bütün componentlerin rahatça erişmesini sağladık.
  ,
  document.getElementById('root')
);

