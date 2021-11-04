import React from 'react';
import AnswerSheet from "../../components/answerSheet";
import styled from "styled-components";

const Questions = () => {

    const QuestionContainer = styled.div`
      background-color: white;
      border: dashed black 2px;
      border-radius: 9px;
      min-height: 70px;
      padding:6px;
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

            <div className={'w-1/3 bg-dark'}>
                <AnswerSheet/>
            </div>


        </main>
    );
};

export default Questions;