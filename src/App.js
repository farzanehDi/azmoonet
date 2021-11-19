import React from 'react';
import {Switch, Router,Route} from "react-router-dom";
import history from "./utilities/history";
import {useViewport} from "./utilities/hook";
import NormalRoute from "./utilities/normalRoute";

const Home = React.lazy(() => import('./pages/home/index'));
const Questions = React.lazy(() => import('./pages/questions/index'));
const QuestionsMobile = React.lazy(() => import('./pages/questionsMobile/index'));
const ContactUs = React.lazy(() => import('./pages/contactUs/index'));
const Login = React.lazy(() => import('./pages/login/index'));
const Register = React.lazy(() => import('./pages/register/index'));
const Answers = React.lazy(() => import('./pages/answers/index'));
const AnswersMobile = React.lazy(() => import('./pages/answersMobile/index'));
const ProfileRoutes = React.lazy(() => import('./pages/profileRoutes/index'));

function App() {

    const {width} = useViewport();

    return (
        <Router history={history}>

                    <Switch>

                        <NormalRoute exact path="/" component={Home}/>
                        <NormalRoute path="/questions" component={width <=600 ? QuestionsMobile : Questions}/>
                        <NormalRoute path="/answers" component={width <=600 ?AnswersMobile:Answers}/>
                        <NormalRoute path="/contactUs" component={ContactUs}/>
                        <NormalRoute path="/login" component={Login}/>
                        <NormalRoute path="/register" component={Register}/>
                        <Route path="/profile" component={ProfileRoutes}/>

                    </Switch>

        </Router>


    );
}

export default App;
