import axios from 'axios';
import {Routers} from './configUrl';


axios.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
);


axios.interceptors.request.use(async request => {

    // const access_token = localStorage.getItem('token');
    const access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwaG9uZU51bWJlciI6IjA5MTI0MDI5OTg1IiwiaXNzIjoidXNlciIsImlkIjoiMTY1OWU3ZmYtODcyYi00MTE5LWExNTYtY2U0NmM2OGQzMDQxIiwiZXhwIjoxNjQwMDY3MDMwLCJpYXQiOjE2MzkwNjcwMzB9.DsezKh-Q1bTq4MzErBJdWSbL5O3IoAvrD27ahwNSbno';
    request.baseURL = Routers.Base_URL;

    if(access_token && request.url.split("?")[0] !== Routers.LOGIN && request.url.split("?")[0] !== Routers.REGISTER){
        request.headers['Authorization'] = [access_token];

    }
    return request;

});


const errorHandler = (error) => {

    console.log(
        "%c ERROR (interceptor) responce =>",
        "background: #8B0000; color: #ffffff; font-size:11pt; font-weight: bold;",
        error.response
    );
    if(error.response.status==401){
        localStorage.removeItem('token');
        window.location.href = `/login`;
    }
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
