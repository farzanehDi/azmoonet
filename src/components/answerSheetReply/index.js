import React from 'react';
import InputImg from "../../assets/images/inputRadio.png";
import TrueAnswer from "../../assets/images/trueAnswer.png";
import FalseAnswer from "../../assets/images/falseAnswer.png";

const AnswerSheetReply = (props) => {


    return (
        <>
            <div className={'bg-dark-300 rounded-xl text-light px-5 pb-3'}>
                <h2 className={'text-center pt-2 pb-3 text-xl'}>پاسخنامه</h2>
                {
                    props.trueAnswers.map((item,index)=>(
                        <div className={'flex items-center gap-4 mb-5'}>
                            <p className={'whitespace-nowrap w-3'}>{index+1}-</p>
                            {
                                item==1 ? <img src={TrueAnswer} alt={'input'} className={'-mt-6 -mr-2'}/>:
                                    props.answers[index]==1?<img src={FalseAnswer} alt={'input'} className={'-mt-2'}/>:<img src={InputImg} alt={'input'} className={'-mt-2'}/>
                            }
                            {
                                item==2 ? <img src={TrueAnswer} alt={'input'} className={'-mt-6 -mr-2'}/>:
                                    props.answers[index]==2?<img src={FalseAnswer} alt={'input'} className={'-mt-2'}/>:<img src={InputImg} alt={'input'} className={'-mt-2'}/>
                            }
                            {
                                item==3 ? <img src={TrueAnswer} alt={'input'} className={'-mt-6 -mr-2'}/>:
                                    props.answers[index]==3?<img src={FalseAnswer} alt={'input'} className={'-mt-2'}/>:<img src={InputImg} alt={'input'} className={'-mt-2'}/>
                            }
                            {
                                item==4 ? <img src={TrueAnswer} alt={'input'} className={'-mt-6 -mr-2'}/>:
                                    props.answers[index]==4?<img src={FalseAnswer} alt={'input'} className={'-mt-2'}/>:<img src={InputImg} alt={'input'} className={'-mt-2'}/>
                            }
                            {/*<img src={InputImg} alt={'input'} />*/}
                            {/*<img src={TrueAnswer} alt={'input'} className={'-mt-6 -mr-2'}/>*/}
                            {/*<img src={FalseAnswer} alt={'input'} className={'-mt-2'}/>*/}
                            {/*<img src={InputImg} alt={'input'} />*/}
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default AnswerSheetReply;