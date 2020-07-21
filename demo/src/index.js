import React from 'react';
import ReactDOM from 'react-dom';
import '../../src/table/index.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import moment from 'moment/moment'
import numeral from 'numeral'

moment.locale('nl')

// load a locale
numeral.register('locale', 'nl', {
    delimiters: {
        thousands: '.',
        decimal: ','
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal : function (number) {
        return number === 1 ? 'er' : 'ème';
    },
    currency: {
        symbol: '€'
    }
});

// switch between locales
numeral.locale('nl');

window._env_ = window._env_ || {}
window._env_.REACT_APP_BRAND_IMAGE_URL = 'https://avatars2.githubusercontent.com/u/66509471?s=200&v=4'

ReactDOM.render(<App />, document.getElementById('demo'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
