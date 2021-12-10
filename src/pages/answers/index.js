import React, {useEffect, useState} from 'react';
import AnswerSheetReply from "../../components/answerSheetReply";
import styled from "styled-components";
import Image from "../../assets/images/questionImg.png";
import {useParams} from "react-router-dom";
import axios from "axios";
import {Routers} from "../../utilities/configUrl";
import {useDispatch} from "react-redux";

const Answers = () => {

    const QuestionContainer = styled.div`
      background-color: white;
      border: dashed black 2px;
      border-radius: 9px;
      min-height: 70px;
      padding: 6px;
      position: relative;
     `;
    const Star = styled.i`
      stroke: #1a1a1a;
      stroke-width: 2;
      -webkit-text-fill-color: white;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: #1a1a1a;
    `;

    const dispatch = useDispatch();
    const [questionAnswers, setQuestionAnswers] = useState([]);
    const [trueAnswers, setTrueAnswers] = useState([]);
    const [answers, setAnswers] = useState([]);
    const { id } =useParams();

    useEffect(()=>{
        dispatch({type: 'loading', payload: true});
        axios(`${Routers.GET_QUIZ_INFO}/${id}`)
            .then(function (response) {

                console.log('get quiz info', response.data);
                setAnswers(response.data.answers);
                setTrueAnswers(response.data.rightAnswers);
                //***get questions image***
                axios(`${Routers.GET_QUESTIONS}/${response.data.id}`)
                    .then(function (response) {

                        console.log('questions', response.data)
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
        <main className={'container flex justify-center items-start my-3 gap-2'}>
            <div className={'w-2/3'}>
                {
                    questionAnswers.map((item,index)=>(
                        <div className={'mb-9'} key={`answerOfQuestion${index}`}>
                            <QuestionContainer>
                               <img src={`${Routers.Base_URL_IMG}${item.question}`} alt={`question${index}`}/>
                                <Star className={`fas fa-star absolute top-2 left-2 cursor-pointer text-lg selectedStar`}></Star>

                            </QuestionContainer>

                            <QuestionContainer className={'mt-2'}>
                                <img src={`${Routers.Base_URL_IMG}${item.answer}`} alt={`answer${index}`} style={{maxHeight:250}}/>
                            </QuestionContainer>
                        </div>
                    ))
                }
                {/*{*/}
                {/*    [...Array(20)].map((array,index)=>(*/}
                {/*        <div className={'mb-9'}>*/}
                {/*            <QuestionContainer>*/}
                {/*                <p>سوال {index+1} -</p>*/}
                {/*                <Star className={`fas fa-star absolute top-2 left-2 cursor-pointer text-lg selectedStar`}></Star>*/}

                {/*            </QuestionContainer>*/}
                {/*            <p className={'text-md my-1'}>از مبحث <strong className={'text-orange'}>نور</strong> سالانه <strong className={'text-orange'}>{index+1}</strong> سوال در کنکور می آید</p>*/}
                {/*            <QuestionContainer>*/}
                {/*                پاسخ {index+1} -*/}
                {/*            </QuestionContainer>*/}
                {/*        </div>*/}
                {/*    ))*/}
                {/*}*/}


            </div>

            <div className={'text-center sticky top-0'}>
                <AnswerSheetReply trueAnswers={trueAnswers} answers={answers}/>
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