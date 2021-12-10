import React from 'react';
import styled from "styled-components";
// import InputImg from '../../assets/images/radioBtn.png';
// import CheckedInputImg from '../../assets/images/checkedInput.png';
import ArrowBtn from "../arrowBtn";
import RocketImg from '../../assets/images/rocketQuestion.png';

const Question = (props) => {

    const QuestionTextContainer = styled.div`
      min-height: 100px;
    `;


    // const Input = styled.input`
      //content: url(${InputImg});
      //-webkit-appearance: none;
      //-moz-appearance: none;
      //appearance: none;

      // &:checked {
      //   content: url(${CheckedInputImg});
      // }
    // `;


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
                <QuestionTextContainer className={'p-2 border-dashed border-2 bg-light rounded-xl '}>
                    {props.children}
                </QuestionTextContainer>

                <div className={'flex items-center justify-between flex-wrap space-y-2 answerSection'}>

                    <div className={'flex items-center w-full md:w-1/2 lg:w-1/4'}>
                        <input type={'radio'} name={`radio${props.dataIndex}`} className={'w-5 h-5'} value={1} />
                        <span className={'mr-1'}>گزینه 1</span>
                    </div>

                    <div className={'flex items-center w-full md:w-1/2 lg:w-1/4'}>
                        <input type={'radio'} name={`radio${props.dataIndex}`} className={'w-5 h-5'} value={2}/>
                        <span className={'mr-1'}>گزینه 2</span>
                    </div>

                    <div className={'flex items-center w-full md:w-1/2 lg:w-1/4'}>
                        <input type={'radio'} name={`radio${props.dataIndex}`} className={'w-5 h-5'} value={3}/>
                        <span className={'mr-1'}>گزینه 3</span>
                    </div>

                    <div className={'flex items-center w-full md:w-1/2 lg:w-1/4'}>
                        <input type={'radio'} name={`radio${props.dataIndex}`} className={'w-5 h-5'} value={4}/>
                        <span className={'mr-1'}>گزینه 4</span>
                    </div>

                </div>

            </div>

            <ArrowBtn {...props}/>

        </div>
    );
};

export default Question;