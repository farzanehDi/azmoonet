import React from 'react';
import InputImg from "../../assets/images/inputRadio.png";
import TrueAnswer from "../../assets/images/trueAnswer.png";
import FalseAnswer from "../../assets/images/falseAnswer.png";

const AnswerSheetReply = () => {


    return (
        <>
            <div className={'bg-dark-300 rounded-xl text-light px-5 pb-3'}>
                <h2 className={'text-center pt-2 pb-3 text-xl'}>پاسخنامه</h2>
                {
                    [...Array(20)].map((array,index)=>(
                        <div className={'flex items-center gap-4 mb-5'}>
                            <p className={'whitespace-nowrap w-3'}>{index+1}-</p>
                            <img src={InputImg} alt={'input'} />
                            <img src={TrueAnswer} alt={'input'} className={'-mt-6 -mr-2'}/>
                            <img src={FalseAnswer} alt={'input'} className={'-mt-2'}/>
                            <img src={InputImg} alt={'input'} />
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default AnswerSheetReply;