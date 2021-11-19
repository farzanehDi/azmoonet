import React from 'react';
import {Route} from 'react-router-dom'
import Header from "../components/header";
import Footer from "../components/footer";

const NormalRoute = ({component: Component, ...rest}) => (

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
);


export default (NormalRoute);
