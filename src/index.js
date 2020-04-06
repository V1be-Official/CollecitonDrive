import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.scss';
import {Provider} from "react-redux";
import configureStore from "./redux/configureStore";

import Themium from "./components/Themium/Themium";

const store = configureStore();

const app = (
    <Provider store={store}>
        <Themium>
            <App />
        </Themium>
    </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
