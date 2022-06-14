
import React from 'react';
import ReactDOM from 'react-dom';

import Rout from "./router";
import App from "./App";

const rootElement = document.getElementById("root");



ReactDOM.render(
  <React.StrictMode>
     <Rout />
  </React.StrictMode>,
  document.getElementById('root')
);

