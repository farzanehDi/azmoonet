import React from 'react';
import {Route, BrowserRouter, Switch, Router} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import ReduxThunk from "redux-thunk";
import history from "./utilities/history";
import reducers from "./reducers/index";

import LoadingFallback from "./components/lodingFallback";
import Header from "./components/header";
import Footer from "./components/footer";

const Home = React.lazy(() => import('./pages/home/index'));
const Questions = React.lazy(() => import('./pages/questions/index'));
const ContactUs = React.lazy(() => import('./pages/contactUs/index'));
const Login = React.lazy(() => import('./pages/login/index'));
const Register = React.lazy(() => import('./pages/register/index'));
const Answers = React.lazy(() => import('./pages/answers/index'));

function App() {
    return (
        <BrowserRouter>
            <React.Suspense fallback={<LoadingFallback/>}>
                <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                    <Router history={history}>
                        <div className="site">
                            <Header/>
                            <div className={'siteContent'} style={{marginTop:73}}>
                                <Switch>

                                    <Route exact path="/" component={Home}/>
                                    <Route path="/questions" component={Questions}/>
                                    <Route path="/contactUs" component={ContactUs}/>
                                    <Route path="/login" component={Login}/>
                                    <Route path="/register" component={Register}/>
                                    <Route path="/answers" component={Answers}/>

                                </Switch>
                            </div>
                            <Footer/>

                        </div>
                    </Router>
                </Provider>
            </React.Suspense>
        </BrowserRouter>

    );
}

export default App;
