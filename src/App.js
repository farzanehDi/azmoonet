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
