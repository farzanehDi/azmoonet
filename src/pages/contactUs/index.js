import React from 'react';
import styled from "styled-components";
import bgContactUS from "../../assets/images/contactUs.png"

const ContactUs = () => {

    const ContactUsContainer = styled.main`
      background-image: url(${bgContactUS});
      background-repeat: no-repeat;
      background-position: bottom left;
    `;

    return (
        <ContactUsContainer className={`table-row`}>
            <div className={'table-cell align-middle py-3'}>
                <div className={'container '}>
                    <h1 className={'text-xl font-bold'}>ارتباط با ما</h1>
                    <p className={'w-full md:w-1/2 lg:w-1/3 mt-4'}>متن ارتباط با ما متن ارتباط با ما متن ارتباط با ما متن ارتباط با ما متن ارتباط با ما متن ارتباط با ما متن ارتباط با ما متن ارتباط با ما </p>
                    <hr className={'w-full md:w-1/2 lg:w-1/3 mt-5 border-light-200'}/>
                    <form className={'mt-5 flex flex-col gap-3 w-full md:w-1/2 lg:w-1/3'}>
                        <input type={'text'} placeholder={'نام و نام خانوادگی'}/>
                        <input type={'text'} placeholder={'موضوع پیام'}/>
                        <textarea placeholder={'پیام شما...'} rows={4}/>
                        <button className={'blackBtn mt-2'}>ارسال پیام</button>
                    </form>
                </div>

            </div>
        </ContactUsContainer>
    );
};

export default ContactUs;