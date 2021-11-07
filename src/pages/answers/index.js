import React from 'react';
import AnswerSheetReply from "../../components/answerSheetReply";
import styled from "styled-components";
import Image from "../../assets/images/questionImg.png";

const Answers = () => {

    const QuestionContainer = styled.div`
      background-color: white;
      border: dashed black 2px;
      border-radius: 9px;
      min-height: 70px;
      padding: 6px;
      margin-bottom: 20px;
    `;

    return (
        <main className={'container flex justify-center my-3 gap-2'}>
            <div className={'lg:w-2/4 w-2/3'}>
                <QuestionContainer>
                    سوال 1 -
                </QuestionContainer>
                <QuestionContainer>
                    سوال 2 -
                </QuestionContainer>
                <QuestionContainer>
                    سوال 3 -
                </QuestionContainer>
                <QuestionContainer>
                    سوال 4 -
                </QuestionContainer>
            </div>

            <div className={'text-center'}>
                <AnswerSheetReply/>
                <button
                    className={'w-full mt-2 hover:text-dark bg-light text-light rounded-xl bg-orange px-1 py-3 text-lg border-4 border-light'}>
                    درصد احتمالی کنکور
                </button>
                <img src={Image} className={'mx-auto mt-2'} alt={'آزمونت'}/>

            </div>


        </main>
    );
};

export default Answers;