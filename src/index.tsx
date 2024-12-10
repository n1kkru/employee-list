import style from './index.module.scss';
import './index.scss';

import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from './components/app/App'
import { BrowserRouter } from "react-router";
import store from './utils/state';
import { Provider } from 'react-redux';
const domNode = document.getElementById("root") as HTMLDivElement;
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);