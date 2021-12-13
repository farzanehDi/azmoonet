import React from 'react';
import styled from "styled-components";
import {useViewport} from "../../utilities/hook";

const MyLessons = () => {

    const {width} = useViewport();

    const Pointer = styled.div`
      width: 25%;
      height: 50px;
      position: relative;
      background: ${props => `${props.bg?props.bg:'white'}`};
      &:after{
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 0;
        border-left: 25px solid #fcc91b;
        border-top: 25px solid transparent;
        border-bottom: 25px solid transparent;
      }
      &:before{
        content: "";
        position: absolute;
        right: -25px;
        bottom: 0;
        width: 0;
        height: 0;
        border-left: 25px solid;
        border-left-color: ${props => `${props.bg?props.bg:'white'}`};
        border-top: 25px solid transparent;
        border-bottom: 25px solid transparent;
      }
    `;

    return (
        <>
            <p className={'text-orange font-semibold text-lg'}>سرفصل: <span className={'text-dark'}>حرکت</span></p>
            <div className={`flex gap-3 mt-2 ${width<=550 && 'mr-5'}`}>
                <Pointer bg={'white'} className={'flex items-center justify-center pl-5 text-xs'}>
                    <p>آزمون فصل</p>
                </Pointer>
                <Pointer bg={'red'} className={'flex items-center justify-center pl-5 text-xs'}>
                    <p>درسنامه دوم</p>
                </Pointer>
                <Pointer bg={'orange'} className={'flex items-center justify-center pl-5 text-xs'}>
                    <p>درسنامه اول</p>
                </Pointer>
            </div>
            <p className={'mt-2'}>درصد شما از این آزمون: <span className={'text-green'}>83%</span></p>
        </>
    );
};

export default MyLessons;