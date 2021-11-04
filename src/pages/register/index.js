import React from 'react';
import LoginImg from '../../assets/images/login.png';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Register = () => {

    const ImageContainer= styled.div`
      box-shadow: 8px 0 8px -8px #333;
    `;

    return (
        <main className={'table-row align-middle'}>
            <div className={'table-cell align-middle py-8'}>
                <div className={'container'}>

                    <div className={'flex items-stretch justify-center'}>
                        {/***login*/}
                        <div className={'bg-light rounded-xl w-full md:w-1/2 lg:w-1/3'}>
                            <div className={`bg-orange-light py-1 pr-4 pl-12 rounded-r-full float-left mt-3`}>
                                خوش آمدید
                            </div>
                            <h1 className={'mt-14 px-8 md:pl-16 text-orange font-semibold text-lg'}>ثبت نام در آزمونت</h1>
                            <form className={'flex flex-col mt-5 px-8 md:pl-16 pb-6'}>
                                <label>شماره تلفن:</label>
                                <input type={'number'} className={'mt-1 mb-5'}/>

                                <label>رمز عبور:</label>
                                <input type={'password'} className={'mt-1 mb-5'}/>

                                <label>مقطع تحصیلی:</label>
                                <select className={'mt-1'}>
                                    <option>اول</option>
                                    <option>دوم</option>
                                    <option>سوم</option>
                                </select>

                                <button className={'blackBtn mt-5'}>ثبت نام</button>
                                <NavLink to={'/login'}
                                         className={'mx-auto mt-2 text-orange text-sm hover:text-gold-300'}>قبلا ثبت نام کرده ام</NavLink>
                            </form>

                        </div>
                        {/***images***/}
                        <ImageContainer className={'bg-orange rounded-l-xl p-4 -mr-8 hidden items-center md:flex'}>
                            <img src={LoginImg} alt={'ورود'} />
                        </ImageContainer>

                    </div>

                </div>
            </div>
        </main>
    );
};

export default Register;