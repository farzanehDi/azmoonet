import React from 'react';
import Sidebar from "../sidebar";
import Logo from "../../assets/images/logo.png";
import Avatar from '../../assets/images/avatar.png';
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {useViewport} from "../../utilities/hook";

const HeaderProfile = () => {

    const {width} = useViewport();

    const LogoImage = styled.img`
      max-width: 115px;
    `;

    return (
        <>

            <div
                className={`shadow-md fixed  top-0 left-0 right-0 z-50 bg-gold py-2 px-4`}>
                <div className={`flex items-center ${width>550?'justify-between':'justify-end'}`}>

                    {
                        width>550 &&
                        <div className={'flex items-center flex-wrap'}>
                            <img src={Avatar} className={'rounded-full w-16 h-16 ml-1'} alt={'user avatar'}/>
                            <div>
                                <div className={'bg-light rounded-xl px-2 py-1 mb-1 text-xs'}>
                                    <span>نام و نام خانوادگی: </span>
                                    <span>---- </span>
                                </div>
                                <div className={'bg-light rounded-xl px-2 py-1 text-xs'}>
                                    <span>مقطع تحصیلی: </span>
                                    <span>---------</span>
                                </div>
                            </div>
                        </div>
                    }



                    <NavLink to={'/'} className={width>550 && '-mt-3'}>
                        <LogoImage src={Logo} alt={'آزمونت'}/>
                    </NavLink>
                </div>

            </div>
            <Sidebar/>

        </>
    );
};

export default HeaderProfile;