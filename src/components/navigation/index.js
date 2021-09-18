import React, {useState} from 'react';
import {Element, scroller} from 'react-scroll';
import Arrow from '../../assets/images/arrow.png';
import ArrowFull from '../../assets/images/arrowFull.png';

const Navigation = (props) => {

    const [step, setStep] = useState(1);


    const preStep = () => {

        if (step !== 0) {
            setStep((prevStep)=>prevStep - 1);
            scroller.scrollTo(step, {smooth: true, containerId: 'containerSteps', duration: 200});

        }

    };

    const nextStep = () => {

        if (step < props.totalSteps) {
            setStep((prevStep)=>prevStep + 1);
            scroller.scrollTo(step, {smooth: true, containerId: 'containerSteps', duration: 200});

        }

    };

    const goSelectedStep=(step)=>{
        props.goToStep(step);
    }

    return (
        <div className={`absolute left-0 w-10 rounded-r-3xl bg-orange z-10`}>
            <div onClick={preStep} className={'text-center py-2 cursor-pointer pr-1'}>
                <img src={step>1?Arrow:ArrowFull} alt={'قبلی'} className={`${step>1 && 'rotate-180 transform'} mx-auto `}/>
            </div>


            <Element id={'containerSteps'} style={{height: 250}} className={` flex flex-col 
            overflow-hidden `}>
                {
                    [...Array(props.totalSteps)].map((step, i) =>(

                        <Element name={`${i+1}`} className={`cursor-pointer text-light text-center py-3`}>
                            <span className={`font-bold text-lg`} onClick={()=>goSelectedStep(i+1)}>{i+1}</span>
                        </Element>
                    ))
                }

            </Element>
            <div onClick={nextStep} className={'text-center py-2 cursor-pointer pr-1'}>
                <img src={step+3<props.totalSteps?Arrow:ArrowFull} alt={'بعدی'} className={`${step+3>=props.totalSteps && 'transform rotate-180'} mx-auto`}/>
            </div>
        </div>
    );
};

export default Navigation;