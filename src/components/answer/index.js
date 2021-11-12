import React from 'react';
import styled from "styled-components";
import ArrowBtn from "../arrowBtn";
import RocketImg from '../../assets/images/rocketQuestion.png';

const Answer = (props) => {

    const QuestionTextContainer = styled.div`
      min-height: 120px;
    `;

    const Star = styled.i`
      stroke: #1a1a1a;
      stroke-width: 2;
      -webkit-text-fill-color: white;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: #1a1a1a;
    `;

    return (
        <div className={'w-11/12'}>
            <div className={'flex items-center justify-between mt-3'}>
                <div className={'flex items-center'}>
                    <div className={'h-2 w-2 bg-orange rounded-full ml-2'}></div>
                    <p className={'text-xl font-semibold'}>سوال شماره <span
                        className={'text-orange'}>{props.currentStep}</span></p>
                </div>
                <img src={RocketImg} alt={'آزمونت'}/>
            </div>
            <div className={`flex flex-col mt-3 gap-2`}>
                <QuestionTextContainer className={'p-3 border-dashed border-2 bg-light rounded-xl relative'}>
                    در اینجا سوال آزمون نوشته میشود
                    <Star className={`fas fa-star absolute top-2 left-2 cursor-pointer text-lg selectedStar`}></Star>
                </QuestionTextContainer>

                <p className={'text-md my-1'}>از مبحث <strong className={'text-orange'}>نور</strong> سالانه <strong className={'text-orange'}>{5}</strong> سوال در کنکور می آید</p>

                <QuestionTextContainer className={'p-3 border-dashed border-2 bg-light rounded-xl '}>
                    پاسخ  -
                </QuestionTextContainer>
            </div>

            <ArrowBtn {...props}/>

        </div>
    );
};

export default Answer;