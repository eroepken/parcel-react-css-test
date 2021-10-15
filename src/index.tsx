import * as React from 'react';
import * as ReactDOM from "react-dom";

import App from './App';
import './styles/index.css';

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Ellie" />, mountNode);
