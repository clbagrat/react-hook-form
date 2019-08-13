import React from 'react';
import {render} from "react-dom";
import App from './App';

const renderApp = AppComponent =>
  render(<AppComponent />, document.getElementById('react-root'));

renderApp(App);