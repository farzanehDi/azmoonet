import React from 'react';

const ArrowBtn = (props) => {


    const nextStep = () => {

        if (props.currentStep === props.totalSteps) {
           console.log('complete exam');
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

                <button className={`rounded-2xl hover:shadow-md border border-orange hover:border-gold  bg-orange text-light py-1 px-3`} onClick={nextStep}>
                    {props.totalSteps === props.currentStep && props.currentStep !== 1 ? 'ثبت سوالات' : 'سوال بعدی'}
                </button>
                <button className={`rounded-2xl hover:shadow-md bg-orange border border-orange hover:border-gold text-light py-1 px-3`} onClick={prevStep}>سوال قبلی</button>
            </div>

    );
};


export default ArrowBtn;

