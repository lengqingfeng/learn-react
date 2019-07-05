import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import counter from "./reduces";
import CounterApp from "./containers/CounterContainer";
import { Provider } from "react-redux";
//http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html




//Store
const store = createStore(counter);

ReactDOM.render(
  <Provider store={store}>
    <CounterApp />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
