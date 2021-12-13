import React, {useEffect, useState} from 'react';
import StepWizard from "react-step-wizard";
import Answer from "../../components/answer";
import Navigation from "../../components/navigation";
import axios from "axios";
import {Routers} from "../../utilities/configUrl";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";

const AnswersMobile = () => {

    const dispatch = useDispatch();
    const [questionAnswers, setQuestionAnswers] = useState([]);
    const [trueAnswers, setTrueAnswers] = useState([]);
    const [answers, setAnswers] = useState([]);
    const { id } =useParams();

    useEffect(()=>{
        dispatch({type: 'loading', payload: true});
        axios(`${Routers.GET_QUIZ_INFO}/${id}`)
            .then(function (response) {

                // console.log('get quiz info', response.data);
                setAnswers(response.data.answers);
                setTrueAnswers(response.data.rightAnswers);
                //***get questions image***
                axios(`${Routers.GET_QUESTIONS}/${response.data.id}`)
                    .then(function (response) {

                        // console.log('questions', response.data)
                        dispatch({type: 'loading', payload: false});

                        response.data.length > 0 && setQuestionAnswers(response.data)

                    }).catch(function (error) {
                    dispatch({type: 'loading', payload: false});
                    console.log('question  error', error)
                });


            }).catch(function (error) {
            dispatch({type: 'loading', payload: false});
            console.log('get quiz info  error', error)
        });
    },[dispatch])

    return (
            // <QuestionContainer className={'absolute h-full right-0 left-0'}>
            // <QuestionContainer className={''}>
                <main className={'container overflow-x-hidden'}>
                    {/*<div className={`w-full overflow-x-hidden`}>*/}
                        <StepWizard
                            isLazyMount={true}
                            nav={ <Navigation/>}
                        >
                            {
                                questionAnswers.map((item,index)=>(
                                    <Answer key={`answerOfQuestion${index}`} data={item} trueAnswers={trueAnswers[index]} answers={answers[index]}/>
                                ))
                            }
                            {/*<Answer/>*/}
                            {/*<Answer/>*/}
                            {/*<Answer/>*/}
                            {/*<Answer/>*/}
                            {/*<Answer/>*/}
                            {/*<Answer/>*/}
                            {/*<Answer/>*/}
                            {/*<Answer/>*/}
                            {/*<Answer/>*/}
                            {/*<Answer/>*/}
                            {/*<Answer/>*/}
                            {/*<Answer/>*/}

                        </StepWizard>
                    {/*</div>*/}

                </main>
           // </QuestionContainer>

    );
};

export default AnswersMobile;