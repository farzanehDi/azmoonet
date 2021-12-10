import React, {useState, useEffect} from 'react';
import LoginImg from '../../assets/images/login.png';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {Routers} from "../../utilities/configUrl";
import axios from 'axios';
import {fixNumbers} from "../../utilities/validate";
import {toast} from "react-toastify";
import history from "../../utilities/history";
import {useDispatch} from 'react-redux';

const Login = () => {

    const ImageContainer = styled.div`
      box-shadow: 8px 0 8px -8px #333;
    `;

    const dispatch = useDispatch();
    const [mobile, setMobile] = useState();
    const [password, setPassword] = useState();
    const [ios, setIos] = useState();

    useEffect(() => {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.platform || "");
        setIos(isIOS);
    }, []);

    const login = (e) => {

        e.preventDefault();
        let errorEmpty = false;
        const inputs = document.querySelectorAll('.require');

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value.trim() === '') {
                errorEmpty = true;
                inputs[i].classList.add('borderRed')

            } else {
                inputs[i].classList.remove('borderRed')

            }
        }
        if (errorEmpty) {
            toast.dark('لطفا همه موارد را تکمیل نمایید');
            return false;
        }
        dispatch({type: 'loading', payload: true});
        axios({method:'POST',url:`${Routers.LOGIN}?phoneNumber=${fixNumbers(mobile)}&password=${password}`})
            .then(function (response) {

                console.log('response',response.data)
                dispatch({type: 'loading', payload: false});

                if(response.data.errorCode==200 || response.data.errorCode==201){
                    toast.dark('ورود شما با موفقیت انجام شد');
                    localStorage.setItem('token',response.data.errorMassage);
                    if(sessionStorage.getItem('url')){
                        history.push(sessionStorage.getItem('url'));
                        sessionStorage.removeItem('url');
                    }else {
                        history.push('/profile');
                    }

                }else {
                    toast.dark(response.data.errorMassage);
                }

        }).catch(function (error) {
            dispatch({type: 'loading', payload: false});
            toast.dark('خطا در ارسال اطلاعات');
            console.log('login error',error)
        });
    };

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
                            <h1 className={'mt-14 px-8 md:pl-16 text-orange font-semibold text-lg'}>ورود</h1>
                            <form className={'flex flex-col mt-5 px-8 md:pl-16 pb-6'}>
                                <label>شماره تلفن:</label>
                                <input type={ios ? "text" : "number"}
                                       value={mobile}
                                       onChange={(e) => setMobile(e.target.value)}
                                       pattern="\d*" className={'mt-1 mb-5 require'}/>

                                <label>رمز عبور:</label>
                                <input type={'password'} className={'mt-1 mb-5 require'}
                                       onChange={(e) => setPassword(e.target.value)}
                                       value={password}/>
                                <div className={'flex justify-between'}>
                                    <div className={'flex items-center'}>
                                        <input type={'checkbox'} className={'ml-1'}/>
                                        <span className={'text-xs'}>مرا به خاطر بسپار</span>
                                    </div>
                                    <span className={'text-xs'}>رمز را فراموش کردم</span>
                                </div>
                                <button className={'blackBtn mt-7'} onClick={login}>ورود</button>
                                <NavLink to={'/register'}
                                         className={'mx-auto mt-2 text-orange text-sm hover:text-gold-300'}>ثبت نام
                                    نکرده ام</NavLink>
                            </form>

                        </div>
                        {/***images***/}
                        <ImageContainer className={'bg-orange rounded-l-xl p-4 -mr-8 hidden items-center md:flex'}>
                            <img src={LoginImg} alt={'ورود'}/>
                        </ImageContainer>

                    </div>

                </div>
            </div>
        </main>
    );
};

export default Login;