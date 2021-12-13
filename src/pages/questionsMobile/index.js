import React, {useEffect, useState} from 'react';
import StepWizard from "react-step-wizard";
import styled from "styled-components";
import Question from "../../components/question";
import Navigation from "../../components/navigation";
import axios from "axios";
import {Routers} from "../../utilities/configUrl";
import {useDispatch} from "react-redux";

const QuestionsMobile = () => {

    // const QuestionContainer = styled.main`
    //   //background: #fcc91b;
    //   //background: linear-gradient(0deg, #fcc91b 0%, #f7b121 100%);
    // `;

    const dispatch = useDispatch();
    const [questions, setQuestion] = useState([]);
    const [questionID, setQuestionID] = useState();

    useEffect(() => {
        dispatch({type: 'loading', payload: true});

        axios(Routers.GET_QUESTION_ID)
            .then(function (response) {

                // console.log('questions_id', response.data);
                setQuestionID(response.data.id);

                //***get questions image***
                axios(`${Routers.GET_QUESTIONS}/${response.data.id}`)
                    .then(function (response) {

                        // console.log('questions', response.data)
                        dispatch({type: 'loading', payload: false});

                        response.data.length > 0 && setQuestion(response.data)

                    }).catch(function (error) {
                    dispatch({type: 'loading', payload: false});
                    console.log('question  error', error)
                });
                //***end get question***

            }).catch(function (error) {
            dispatch({type: 'loading', payload: false});
            console.log('question id  error', error)
        });

    }, [dispatch])

    return (
            // <QuestionContainer className={'absolute h-full right-0 left-0'}>
            // <QuestionContainer className={''}>
                <main className={'container overflow-x-hidden'}>
                    {/*<div className={`w-full overflow-x-hidden`}>*/}
                        <StepWizard
                            isLazyMount={false}
                            nav={ <Navigation/>}
                        >
                            {
                                questions.map((item, index) => (
                                    <Question key={`question${index}`} dataIndex={index} dataQuestionId={questionID}>
                                        <img src={`${Routers.Base_URL_IMG}${item.question}`} alt={`question${index}`}/>
                                    </Question>
                                ))
                            }
                            {/*<Question/>*/}
                            {/*<Question/>*/}
                            {/*<Question/>*/}
                            {/*<Question/>*/}
                            {/*<Question/>*/}
                            {/*<Question/>*/}
                            {/*<Question/>*/}
                            {/*<Question/>*/}
                            {/*<Question/>*/}
                            {/*<Question/>*/}
                            {/*<Question/>*/}
                            {/*<Question/>*/}
                            {/*<Question/>*/}
                        </StepWizard>
                    {/*</div>*/}

                </main>
           // </QuestionContainer>

    );
};

export default QuestionsMobile;