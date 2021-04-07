import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';

import 'normalize.css';
import './styles/styles.scss'
// import validator from 'validator';
// const template = React.createElement('p', {}, 'test');

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

