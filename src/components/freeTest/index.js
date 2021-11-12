import React from 'react';
import styled from "styled-components";
import TestImg from '../../assets/images/test.png';
import BookImg from '../../assets/images/bookIcon.png';
import HatImg from '../../assets/images/hat.png';
import ChartImg from '../../assets/images/chart.png';
import {NavLink} from "react-router-dom";

const FreeTest = () => {

    const GradientSection = styled.section`
      background: rgb(97, 97, 97);
      background: radial-gradient(circle, rgba(97, 97, 97, 1) 0%, rgba(0, 0, 0, 1) 100%);

      h2 {
        font-size: 16px
      }
      @media (max-width: 500px) {
        h2 {
          font-size: 13px
        }
      }
    `;

    return (
        <GradientSection>
            <div className={'container flex justify-between py-5 flex-wrap'}>
                <div className={'flex flex-wrap sm:w-2/3 lg:w-1/2 w-full text-light pr-1 '}>
                    <div className={'flex flex-col justify-center items-center w-1/2 mb-4'}>
                        <div className={'rounded-full bg-light mb-2 w-20 h-20'}>
                            <img src={TestImg} alt={'تشخیص نقاط ضعف و قدرت'}/>
                        </div>
                        <div className={'flex items-center'}>
                            <div className={'bg-gold rounded-full h-2 w-2 ml-1'}></div>
                            <h2 className={'whitespace-nowrap'}>تشخیص نقاط ضعف و قدرت</h2>
                        </div>
                    </div>
                    <div className={'flex flex-col justify-center items-center w-1/2 mb-4'}>
                        <div className={'rounded-full bg-light mb-2 w-20 h-20 flex items-center justify-center p-2'}>
                            <img src={BookImg} alt={'پیشنهاد درسنامه'}/>
                        </div>
                        <div className={'flex items-center'}>
                            <div className={'bg-gold rounded-full h-2 w-2 ml-1'}></div>
                            <h2>پیشنهاد درسنامه</h2>
                        </div>
                    </div>
                    <div className={'flex flex-col justify-center items-center w-1/2 mb-4'}>
                        <div className={'rounded-full bg-light mb-2 w-20 h-20 flex items-center justify-center p-4'}>
                            <img src={ChartImg} alt={'ثبت نمودار پیشرفت'}/>
                        </div>
                        <div className={'flex items-center'}>
                            <div className={'bg-gold rounded-full h-2 w-2 ml-1'}></div>
                            <h2>ثبت نمودار پیشرفت</h2>
                        </div>
                    </div>
                    <div className={'flex flex-col justify-center items-center w-1/2 mb-4'}>
                        <div className={'rounded-full bg-light mb-2 w-20 h-20 flex items-center justify-center p-2'}>
                            <img src={HatImg} alt={'برنامه درسی فردی'}/>
                        </div>
                        <div className={'flex items-center'}>
                            <div className={'bg-gold rounded-full h-2 w-2 ml-1'}></div>
                            <h2>برنامه درسی فردی</h2>
                        </div>
                    </div>
                </div>
                <div className={'sm:w-1/3 lg:w-1/2 w-full flex items-center justify-center'}>
                    <NavLink to={'/'} className={'bg-gold px-4 py-2 rounded-xl font-semibold text-lg hover:text-light'}>
                        بریم آزمون رایگان
                    </NavLink>

                </div>
            </div>
        </GradientSection>
    );
};

export default FreeTest;