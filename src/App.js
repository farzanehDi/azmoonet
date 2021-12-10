import React from 'react';
import {Switch, Router, Route} from "react-router-dom";
import history from "./utilities/history";
import './utilities/interceptors';
import {useViewport} from "./utilities/hook";
import NormalRoute from "./utilities/normalRoute";
import PrivateRoute from "./utilities/privateRoute";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "./components/loading";

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
                <NormalRoute path="/questions" component={width <= 600 ? QuestionsMobile : Questions} private={true}/>
                <NormalRoute path="/answers/:id" component={width <= 600 ? AnswersMobile : Answers} private={true}/>
                <NormalRoute path="/contactUs" component={ContactUs}/>
                <NormalRoute path="/login" component={Login}/>
                <NormalRoute path="/register" component={Register}/>
                <PrivateRoute path="/profile" component={ProfileRoutes}/>

            </Switch>
            <ToastContainer position="top-right"
                            autoClose={5000}
                            hideProgressBar={true}
                            newestOnTop={false}
                            closeOnClick
                            rtl={true}/>
            <Loading/>
        </Router>


    );
}

export default App;
