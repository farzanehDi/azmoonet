import React from 'react';
import {useSelector} from 'react-redux';
import LogoImg from '../../assets/images/logo.png'

const Loading = () => {

    const loading = useSelector((state) => state.auth.loading);

    return (
        <>
            {
                 loading && <div
                    className={"flex fixed w-auto h-auto bg-dark bg-opacity-25 top-0 bottom-0 left-0 right-0 z-30 flex-col justify-center items-center "}>
                    <div className={"py-3 px-5 bg-light rounded border border-light-200"}>
                        <img src={LogoImg} alt="فالنیک" className={"mb-3"}/>
                        {/* ****loading**** */}
                        <div className="animate-pulse mb-2 ">
                            <div className="h-1 bg-orange rounded w-full"></div>
                        </div>
                        {/* ********* */}
                        <p className={'text-center text-xs'}>در حال بارگزاری...</p>
                    </div>
                </div>
            }
        </>

    );
};

export default Loading;