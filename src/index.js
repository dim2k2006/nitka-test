import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import Root from './components/Root';
import generateData from './utils/generateData';

const data = generateData();

ReactDOM.render(<Root data={data} />, document.getElementById('root'));
