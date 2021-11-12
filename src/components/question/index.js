import React from 'react';
import styled from "styled-components";
import InputImg from '../../assets/images/radioBtn.png';
import CheckedInputImg from '../../assets/images/checkedInput.png';
import ArrowBtn from "../arrowBtn";
import RocketImg from '../../assets/images/rocketQuestion.png';

const Question = (props) => {

    const QuestionTextContainer = styled.div`
      min-height: 120px;
    `;


    const Input = styled.input`
      content: url(${InputImg});
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;

      &:checked {
        content: url(${CheckedInputImg});
      }
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
                <QuestionTextContainer className={'p-3 border-dashed border-2 bg-light rounded-xl '}>
                    در اینجا سوال آزمون نوشته میشود
                </QuestionTextContainer>

                <div className={'flex items-center justify-between flex-wrap space-y-2'}>

                    <div className={'flex items-center w-full md:w-1/2 lg:w-1/4'}>
                        <Input type={'radio'} name={'question'} className={'bg-light rounded-full'}/>
                        <span className={'mr-1'}>پاسخ شماره یک</span>
                    </div>

                    <div className={'flex items-center w-full md:w-1/2 lg:w-1/4'}>
                        <Input type={'radio'} name={'question'} className={'bg-light rounded-full'}/>
                        <span className={'mr-1'}>پاسخ شماره دو</span>
                    </div>

                    <div className={'flex items-center w-full md:w-1/2 lg:w-1/4'}>
                        <Input type={'radio'} name={'question'} className={'bg-light rounded-full'}/>
                        <span className={'mr-1'}>پاسخ شماره سه</span>
                    </div>

                    <div className={'flex items-center w-full md:w-1/2 lg:w-1/4'}>
                        <Input type={'radio'} name={'question'} className={'bg-light rounded-full'}/>
                        <span className={'mr-1'}>پاسخ شماره چهار</span>
                    </div>

                </div>

            </div>

            <ArrowBtn {...props}/>

        </div>
    );
};

export default Question;