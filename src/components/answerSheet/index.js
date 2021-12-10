import React, {useState} from 'react';
import styled from "styled-components";
import InputImg from "../../assets/images/inputRadio.png";
import CheckedInputImg from "../../assets/images/inputRadioChecked.png";

const AnswerSheet = (props) => {

    const Input = styled.input`
      content: url(${InputImg});
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;

      &:checked {
        content: url(${CheckedInputImg});
        margin-top:-4px;
      }

    `;

    return (
        <>
            <div className={'bg-dark-300 rounded-xl text-light px-5 pb-3'}>
                <h2 className={'text-center pt-2 pb-3 text-xl'}>پاسخنامه</h2>
                {
                    [...Array(props.dataLength)].map((array,index)=>(
                        <div className={'flex items-center gap-4 mb-3 answerSection'}>
                            <p className={'whitespace-nowrap w-3'}>{index+1}-</p>
                            <Input type={'radio'} name={`radio${index}`} value={1}/>
                            <Input type={'radio'} name={`radio${index}`} value={2}/>
                            <Input type={'radio'} name={`radio${index}`} value={3}/>
                            <Input type={'radio'} name={`radio${index}`} value={4}/>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default AnswerSheet;