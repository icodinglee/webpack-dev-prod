import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './router/index.jsx';
import { deepCompare } from './util/util';

// 引入全局样式
import './static/styles/style.scss';

ReactDOM.render(<Routes />, document.getElementById('root'));