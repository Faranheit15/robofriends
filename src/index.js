import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList'
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(
  <CardList robots={robots}/>,
  document.getElementById('root')
);

serviceWorker.unregister();
