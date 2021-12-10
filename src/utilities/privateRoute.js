import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => {

    if (localStorage.getItem("token")) {
        return (
            <Route {...rest}

                   render={() =>
                       <Component/>
                   }
            />)
    } else {
        sessionStorage.setItem('url',rest.path);
        return (
            <Route  {...rest}

                    render={() =>
                        <Redirect to="/login"/>
                    }
            />)
    }

};


export default (PrivateRoute);
