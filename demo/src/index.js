import React from 'react';
import ReactDOM from 'react-dom';
import '../../src/table/index.css';
import configure from '../../src/configure'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

configure()

window._env_ = window._env_ || {}
window._env_.REACT_APP_BRAND_IMAGE_URL = 'https://avatars2.githubusercontent.com/u/66509471?s=200&v=4'

ReactDOM.render(<App />, document.getElementById('demo'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
