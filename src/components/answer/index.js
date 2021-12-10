import React from 'react';
import styled from "styled-components";
import ArrowBtn from "../arrowBtn";
import RocketImg from '../../assets/images/rocketQuestion.png';
import {Routers} from "../../utilities/configUrl";
import TrueAnswer from "../../assets/images/trueInput.png";
import FalseAnswer from "../../assets/images/wrongInput.png";

const Answer = (props) => {

    const QuestionTextContainer = styled.div`
      min-height: 120px;
    `;

    const Star = styled.i`
      stroke: #1a1a1a;
      stroke-width: 2;
      -webkit-text-fill-color: white;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: #1a1a1a;
    `;

    return (
        <div className={'w-11/12'}>
            <div className={'flex items-center justify-between mt-3'}>
                <div className={'flex items-center'}>
                    <div className={'h-2 w-2 bg-orange rounded-full ml-2'}></div>
                    <p className={'text-xl font-semibold'}>سوال شماره <span
                        className={'text-orange'}>{props.currentStep}</span></p>
                </div>
                <img src={RocketImg} alt={'آزمونت'}/>
            </div>
            <div className={`flex flex-col mt-3 gap-2`}>
                <QuestionTextContainer className={'p-3 border-dashed border-2 bg-light rounded-xl relative'}>
                    <img src={`${Routers.Base_URL_IMG}${props.data.question}`} alt={`question${props.data.question}`}/>
                    <Star className={`fas fa-star absolute top-2 left-2 cursor-pointer text-lg selectedStar`}></Star>
                </QuestionTextContainer>

                {/*<p className={'text-md my-1'}>از مبحث <strong className={'text-orange'}>نور</strong> سالانه <strong className={'text-orange'}>{5}</strong> سوال در کنکور می آید</p>*/}

                <QuestionTextContainer className={'p-2 border-dashed border-2 bg-light rounded-xl '}>
                    <img src={`${Routers.Base_URL_IMG}${props.data.answer}`} alt={`answer${props.data.answer}`}
                         style={{maxHeight: 250}}/>
                </QuestionTextContainer>
            </div>


            <div className={'flex  flex-wrap gap-4 mt-4'}>


                <div className={'flex w-1/3'}>
                    {
                        props.trueAnswers == 1 ? <img src={TrueAnswer} alt={'input'} /> :
                            props.answers == 1 ? <img src={FalseAnswer} alt={'input'} /> :
                                <input type={'radio'} className={'w-6 h-6'}/>
                    }
                    <span className={'mr-1'}>گزینه 1</span>
                </div>


                <div className={'flex w-1/3'}>
                    {
                        props.trueAnswers == 2 ? <img src={TrueAnswer} alt={'input'}/> :
                            props.answers == 2 ? <img src={FalseAnswer} alt={'input'} /> :
                                <input type={'radio'} className={'w-6 h-6'}/>
                    }
                    <span className={'mr-1'}>گزینه 2</span>
                </div>
                <div className={'flex w-1/3'}>
                    {
                        props.trueAnswers == 3 ? <img src={TrueAnswer} alt={'input'}/> :
                            props.answers == 3 ? <img src={FalseAnswer} alt={'input'} /> :
                                <input type={'radio'} className={'w-6 h-6'}/>
                    }
                    <span className={'mr-1'}>گزینه 3</span>
                </div>
                <div className={'flex w-1/3'}>
                    {
                        props.trueAnswers == 4 ? <img src={TrueAnswer} alt={'input'}/> :
                            props.answers == 4 ? <img src={FalseAnswer} alt={'input'} /> :
                                <input type={'radio'} className={'w-6 h-6'}/>
                    }
                    <span className={'mr-1'}>گزینه 4</span>
                </div>


                {/*<div className={'flex items-center w-full md:w-1/2 lg:w-1/4'}>*/}
                {/*    <input type={'radio'} name={`radio${props.dataIndex}`} className={'w-5 h-5'} value={1}/>*/}
                {/*    <span className={'mr-1'}>گزینه 1</span>*/}
                {/*</div>*/}

                {/*<div className={'flex items-center w-full md:w-1/2 lg:w-1/4'}>*/}
                {/*    <input type={'radio'} name={`radio${props.dataIndex}`} className={'w-5 h-5'} value={2}/>*/}
                {/*    <span className={'mr-1'}>گزینه 2</span>*/}
                {/*</div>*/}

                {/*<div className={'flex items-center w-full md:w-1/2 lg:w-1/4'}>*/}
                {/*    <input type={'radio'} name={`radio${props.dataIndex}`} className={'w-5 h-5'} value={3}/>*/}
                {/*    <span className={'mr-1'}>گزینه 3</span>*/}
                {/*</div>*/}

                {/*<div className={'flex items-center w-full md:w-1/2 lg:w-1/4'}>*/}
                {/*    <input type={'radio'} name={`radio${props.dataIndex}`} className={'w-5 h-5'} value={4}/>*/}
                {/*    <span className={'mr-1'}>گزینه 4</span>*/}
                {/*</div>*/}

            </div>

            <ArrowBtn {...props}/>

        </div>
    );
};

export default Answer;