import React from 'react';
import styled from "styled-components";
import {useViewport} from "../../utilities/hook";
import HeaderProfile from "../../components/headerProfile";
import {Route} from "react-router-dom";

const MyLessons = React.lazy(() => import('../myLessons/index'));

const ProfileRoutes = () => {

    const {width} = useViewport();

    const PageWrap = styled.div`
      width: 100%;

      ${() => width > 550 && `
        width: -webkit-calc(100% - 200px);
        width:    -moz-calc(100% - 200px);
        width:         calc(100% - 200px);
        float:left;
  `}
    `;

    return (
        <div id="outer-container" className={'h-full bg-gold'}>
            <HeaderProfile/>
            <PageWrap id="page-wrap" className={`${width>550?'mt-24':'mt-16'} container`}>
                <Route  exact path="/profile" component={MyLessons}/>
            </PageWrap>
        </div>
    );
};

export default ProfileRoutes;