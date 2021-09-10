import React from 'react';
import styled from "styled-components";
import ComputerImg from '../../assets/images/computersBg.png';

const WhyAzmoonet = () => {

    const Container = styled.section`
      background-image: url(${ComputerImg});
      min-height: 300px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: top right;

      h2 {font-size: 22px}
    `;
    return (

        <Container className={'flex flex-col justify-center items-left'}>
            <div className={`container flex items-center 2xl:justify-center  md:justify-end`}>
                <div className={'md:w-1/2 lg:1/3 md:ml-18 lg:ml-0 bg-light bg-opacity-80 p-3 rounded '}>
                    <h2 className={'mb-5 font-bold bg-gold w-max px-3 py-2 rounded'}>چرا آزمونت؟</h2>
                    <p className={'text-justify font-semibold text-base'}>در آزمونت هر یک از دانش آموزان دارای پرونده تحصیلی بوده و روند طی شده در راستای آموزشی هر آزمون
                        ثبت و ضبط می گردد.</p>
                </div>
            </div>
        </Container>

    );
};

export default WhyAzmoonet;