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
      position: relative;
     `;
    const Star = styled.i`
      stroke: #1a1a1a;
      stroke-width: 2;
      -webkit-text-fill-color: white;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: #1a1a1a;
    `;

    return (
        <main className={'container flex justify-center my-3 gap-2'}>
            <div className={'lg:w-2/4 w-2/3'}>
                {
                    [...Array(20)].map((array,index)=>(
                        <div className={'mb-9'}>
                            <QuestionContainer>
                                <p>سوال {index+1} -</p>
                                <Star className={`fas fa-star absolute top-2 left-2 cursor-pointer text-lg selectedStar`}></Star>

                            </QuestionContainer>
                            <p className={'text-md my-1'}>از مبحث <strong className={'text-orange'}>نور</strong> سالانه <strong className={'text-orange'}>{index+1}</strong> سوال در کنکور می آید</p>
                            <QuestionContainer>
                                پاسخ {index+1} -
                            </QuestionContainer>
                        </div>
                    ))
                }


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