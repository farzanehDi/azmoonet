import React, {useEffect, useState} from 'react';
import AnswerSheet from "../../components/answerSheet";
import styled from "styled-components";
import Image from "../../assets/images/questionImg.png";
import axios from "axios";
import {Routers} from "../../utilities/configUrl";
import history from "../../utilities/history";
import {useDispatch} from "react-redux";

const Questions = () => {

    const QuestionContainer = styled.div`
      background-color: white;
      border: dashed black 2px;
      border-radius: 9px;
      min-height: 70px;
      padding: 6px;
      margin-bottom: 20px;
    `;

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

    const sendAnswers = () => {

        dispatch({type: 'loading', payload: true});
        //***get selected answers***
        let answersArray=[];
        const answerDiv=document.querySelectorAll('.answerSection');
        for(let i=0;i<answerDiv.length;i++){
            let selectedItem=document.querySelector(`input[name="radio${i}"]:checked`);
            selectedItem?answersArray.push(selectedItem.value):answersArray.push(0);
        }
        //*******

        axios({method:'POST',url:`${Routers.POST_ANSWERS}?answers=${answersArray.join("")}&id=${questionID}`})
            .then(function (response) {

                // console.log('send answers', response.data)
                dispatch({type: 'loading', payload: false});
                history.push(`/answers/${questionID}`)

            }).catch(function (error) {
            dispatch({type: 'loading', payload: false});
            console.log('send answers  error', error)
        });
    }

    return (
        <main className={'container flex justify-center items-start my-3 gap-2'}>
            <div className={' w-2/3'}>
                {
                    questions.map((item, index) => (
                        <QuestionContainer key={`question${index}`}>
                            <img src={`${Routers.Base_URL_IMG}${item.question}`} alt={`question${index}`}/>
                        </QuestionContainer>
                    ))
                }

            </div>


            <div className={'text-center sticky top-0'}>
                <AnswerSheet dataLength={questions.length}/>
                <button onClick={sendAnswers}
                        className={'w-full mt-2 hover:text-dark bg-light text-light rounded-xl bg-orange px-1 py-3 text-lg border-4 border-light'}>ثبت
                    و
                    پایان آزمون
                </button>
                <img src={Image} className={'mx-auto mt-2'} alt={'آزمونت'}/>

            </div>
        </main>
    );
};

export default Questions;