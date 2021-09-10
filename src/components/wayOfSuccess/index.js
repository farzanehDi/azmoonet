import React from 'react';
import styled from "styled-components";
import WayOfSuccessImg from '../../assets/images/wayOfSuccess.png';

const WayOfSuccess = () => {


    const CircleGradient = styled.section`
      background: rgb(97,97,97);
      background: radial-gradient(circle, rgba(97,97,97,1) 0%, rgba(0,0,0,1) 100%);
      h2{font-size: 22px}
    `;

    const Oblique = styled.div`
      min-height:1px;
     :after{
       position: absolute;
       top: 100%;
       left: 0;
       right:0;
       content: '';
       height: 0;
       width: 0;
       border-left: 100vw solid #ffffff;
       border-bottom: 8vw solid transparent;
       border-top: 0 solid transparent;
       overflow: hidden;
     }

    `;

    return (


            <CircleGradient className={`text-light`}>
                <Oblique className={`bg-light w-full relative lg:mb-40 sm:mb-28 mb-14`}></Oblique>

                <div className={'container grid grid-cols-12 mx-auto'}>
                    <div className={'sm:col-span-7 col-span-12'}>
                        <h2 className={'font-bold mb-5 flex items-center'}>
                            <div className={'bg-gold rounded-full h-4 w-4 ml-2'}></div>
                            مسیر موفقیت با آزمونت:

                        </h2>
                        <p className={'text-base text-justify'}>ما در آزمونت به این اعتقادیم که برای موفقیت در هر آزمون باید استراتژی و آمادگی مخصوص داشت. بدین منظور در سیستم (آزمونت با آزمونت) ابتدا دانش آموز از مباحث مربوطه آزمون شماره صفر را به صورت رایگان شروع کرده و سپس با تکنولوژی هوش مصنوعی به سمت مباحثی که گزینه غلط را زده هدایت میشود.</p>
                    </div>
                    <div  className={'sm:col-span-5 col-span-12'}>
                        <img src={WayOfSuccessImg} alt={'مسیر موفقیت با آزمونت'} className={'sm:float-left mx-auto'}/>
                    </div>

                </div>

            </CircleGradient>


    );
};

export default WayOfSuccess;