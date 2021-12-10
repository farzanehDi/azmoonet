import React from 'react';
import {Redirect, Route} from 'react-router-dom'
import Header from "../components/header";
import Footer from "../components/footer";

const NormalRoute = ({component: Component, ...rest}) => {

    if(rest.private && !localStorage.getItem("token")){
        sessionStorage.setItem('url',rest.path);
        return (
            <Redirect to="/login" />
        )
    }else{
        return (
            <Route
                {...rest}

                render={(props) =>
                    <div className="site">
                        <Header/>
                        <div className={'siteContent'} style={{marginTop: 73}}>
                            <Component/>
                        </div>
                        <Footer/>
                    </div>
                }
            />
        )
    }


    // :{
    //
    // }
    // sessionStorage.setItem('url',rest.path)
    // <Redirect to="/login" />
};


export default (NormalRoute);
