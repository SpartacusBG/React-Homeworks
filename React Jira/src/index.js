import "babel-polyfill";
import './styles/style.scss';
import { render } from 'react-dom';
import React from 'react';
import App from './js/app';
import { BrowserRouter as Router} from 'react-router-dom';

render(
  <Router><App /></Router>,
  document.getElementById('root')
);