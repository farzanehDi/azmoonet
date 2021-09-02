import axios from 'axios';
import {Routers} from './configUrl';


axios.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
);


axios.interceptors.request.use(async request => {

    // const access_token = Cookies.get("token");
    const access_token = localStorage.getItem('token');
    request.baseURL = Routers.Base_URL;
    request.headers["api-token"] = [access_token];
    return request;

});


const errorHandler = (error) => {

    console.log(
        "%c ERROR (interceptor) responce =>",
        "background: #8B0000; color: #ffffff; font-size:11pt; font-weight: bold;",
        error.response
    );
    return Promise.reject({...error});
};

const successHandler = (response) => {

    console.log(
        "%c SUCCESS (interceptor) responce =>",
        "background: #006400; color: #ffffff; font-size:11pt; font-weight: bold;",
        response
    );

    return response;

};
