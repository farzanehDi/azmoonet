import React from 'react';
import StepWizard from "react-step-wizard";
import Answer from "../../components/answer";
import Navigation from "../../components/navigation";

const AnswersMobile = () => {


    return (
            // <QuestionContainer className={'absolute h-full right-0 left-0'}>
            // <QuestionContainer className={''}>
                <main className={'container overflow-x-hidden'}>
                    {/*<div className={`w-full overflow-x-hidden`}>*/}
                        <StepWizard
                            isLazyMount={true}
                            nav={ <Navigation/>}
                        >
                            <Answer/>
                            <Answer/>
                            <Answer/>
                            <Answer/>
                            <Answer/>
                            <Answer/>
                            <Answer/>
                            <Answer/>
                            <Answer/>
                            <Answer/>
                            <Answer/>
                            <Answer/>

                        </StepWizard>
                    {/*</div>*/}

                </main>
           // </QuestionContainer>

    );
};

export default AnswersMobile;