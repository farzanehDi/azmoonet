import React from 'react';
import Pin from '../../assets/images/pin.png';
import Instagram from '../../assets/images/instagram.png';
import Phone from '../../assets/images/phone.png';
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className={'bg-dark-300 text-light text-center'}>
                <h3 className={'text-xl pt-2 '}>ارتباط با ما </h3>
                <div className={'container flex items-center justify-center py-3'}>
                    <NavLink to={''}>
                        <img src={Pin} alt={'location'} />
                    </NavLink>
                    <NavLink to={''} className={'mx-5'}>
                        <img src={Instagram} alt={'instagram'}/>
                    </NavLink>
                    <NavLink to={''}>
                        <img src={Phone} alt={'phone'}/>
                    </NavLink>
                </div>
            </div>
            <div className={'bg-gold-300 text-center py-2 text-xs'}>
                <div className={'container'}>© آزمونت 2021 . کلیه حقوق این وب سایت متعلق به آزمونت است</div>
            </div>
        </footer>
    );
};

export default Footer;