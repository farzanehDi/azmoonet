import React from 'react';
import StepWizard from "react-step-wizard";
import styled from "styled-components";
import Question from "../../components/question";
import Navigation from "../../components/navigation";

const QuestionsMobile = () => {

    // const QuestionContainer = styled.main`
    //   //background: #fcc91b;
    //   //background: linear-gradient(0deg, #fcc91b 0%, #f7b121 100%);
    // `;

    return (
            // <QuestionContainer className={'absolute h-full right-0 left-0'}>
            // <QuestionContainer className={''}>
                <main className={'container overflow-x-hidden'}>
                    {/*<div className={`w-full overflow-x-hidden`}>*/}
                        <StepWizard
                            isLazyMount={true}
                            nav={ <Navigation/>}
                        >
                            <Question/>
                            <Question/>
                            <Question/>
                            <Question/>
                            <Question/>
                            <Question/>
                            <Question/>
                            <Question/>
                            <Question/>
                            <Question/>
                            <Question/>
                            <Question/>
                            <Question/>
                        </StepWizard>
                    {/*</div>*/}

                </main>
           // </QuestionContainer>

    );
};

export default QuestionsMobile;