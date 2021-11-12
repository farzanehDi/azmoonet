import React from 'react';
import ReactDOM from 'react-dom';
import '../src/assets/css/index.css';
import '../src/assets/css/all.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoadingFallback from "./components/lodingFallback";
import {applyMiddleware, createStore} from "redux";
import reducers from "./reducers";
import ReduxThunk from "redux-thunk";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <React.Suspense fallback={<LoadingFallback/>}>
                <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                    <App/>
                </Provider>
            </React.Suspense>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
