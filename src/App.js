import React, {useEffect} from 'react';
import {Route, Switch, Router} from "react-router-dom";
import history from "./utilities/history";
import Header from "./components/header";
import Footer from "./components/footer";
import {useViewport} from "./utilities/hook";

const Home = React.lazy(() => import('./pages/home/index'));
const Questions = React.lazy(() => import('./pages/questions/index'));
const QuestionsMobile = React.lazy(() => import('./pages/questionsMobile/index'));
const ContactUs = React.lazy(() => import('./pages/contactUs/index'));
const Login = React.lazy(() => import('./pages/login/index'));
const Register = React.lazy(() => import('./pages/register/index'));
const Answers = React.lazy(() => import('./pages/answers/index'));
const AnswersMobile = React.lazy(() => import('./pages/answersMobile/index'));

function App() {

    const {width} = useViewport();

    return (
        <Router history={history}>
            <div className="site">
                <Header/>
                <div className={'siteContent'} style={{marginTop: 73}}>
                    <Switch>

                        <Route exact path="/" component={Home}/>
                        <Route path="/questions" component={width <=600 ? QuestionsMobile : Questions}/>
                        <Route path="/answers" component={width <=600 ?AnswersMobile:Answers}/>
                        <Route path="/contactUs" component={ContactUs}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>

                    </Switch>
                </div>
                <Footer/>

            </div>
        </Router>


    );
}

export default App;
