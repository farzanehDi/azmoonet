import React from 'react';
import axios from "axios";
import {Routers} from "../../utilities/configUrl";
import {useDispatch} from "react-redux";
import history from "../../utilities/history";
import { useLocation } from 'react-router-dom'

const ArrowBtn = (props) => {


    const dispatch = useDispatch();
    const location = useLocation();

    const nextStep = () => {

        if (props.currentStep === props.totalSteps) {
           // ***send answers***
            dispatch({type: 'loading', payload: true});
            //***get selected answers***
            let answersArray=[];
            const answerDiv=document.querySelectorAll('.answerSection');

            for(let i=0;i<answerDiv.length;i++){
                let selectedItem=document.querySelector(`input[name="radio${i}"]:checked`);
                // console.log('selected',selectedItem.value);
                selectedItem?answersArray.push(selectedItem.value):answersArray.push(0);
            }
            //*******

            axios({method:'POST',url:`${Routers.POST_ANSWERS}?answers=${answersArray.join("")}&id=${props.dataQuestionId}`})
                .then(function (response) {

                    // console.log('send answers', response.data)
                    dispatch({type: 'loading', payload: false});
                    history.push(`/answers/${props.dataQuestionId}`)

                }).catch(function (error) {
                dispatch({type: 'loading', payload: false});
                console.log('send answers  error', error)
            });

        } else {
            props.nextStep();
        }

    }

    const prevStep = () => {
        if (props.currentStep !== 1) {
            props.previousStep();
        }

    }

    return (

            <div className={'flex items-center justify-center space-x-reverse flex-wrap space-x-2 mb-5 py-4 mt-5'}>
                  <button className={`rounded-2xl hover:shadow-md border border-orange hover:border-gold
                 ${(props.totalSteps === props.currentStep)&& location.pathname!='/questions' &&'hidden'}
                bg-orange text-light py-1 px-3`} onClick={nextStep}>
                    {props.totalSteps === props.currentStep && props.currentStep !== 1 ? 'ثبت سوالات' : 'سوال بعدی'}
                </button>
                <button className={`rounded-2xl hover:shadow-md bg-orange border border-orange hover:border-gold text-light py-1 px-3`} onClick={prevStep}>سوال قبلی</button>
            </div>

    );
};


export default ArrowBtn;

