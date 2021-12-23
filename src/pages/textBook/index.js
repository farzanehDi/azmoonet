import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {Routers} from "../../utilities/configUrl";
import {useDispatch} from "react-redux";
import styled from "styled-components";

const TextBook = () => {

    const QuestionContainer = styled.div`
      background-color: white;
      border: dashed black 2px;
      border-radius: 9px;
      min-height: 70px;
      padding: 6px;
      margin-bottom: 20px;
    `;

    const dispatch = useDispatch();
    const [textBookList, setTextBookList] = useState([]);
    const { id } =useParams();

    useEffect(()=>{
        dispatch({type: 'loading', payload: true});
        axios(`${Routers.TEXT_BOOK}/${id}`)
            .then(function (response) {
                dispatch({type: 'loading', payload: false});
                setTextBookList(response.data);


            }).catch(function (error) {
            dispatch({type: 'loading', payload: false});
            console.log('get textbook  error', error)
        });
    },[dispatch, id])

    return (
        <>
            {textBookList.length<=0 && <p className={'text-orange font-semibold text-lg mb-4'}>موردی برای نمایش وجود ندارد</p>}
            {textBookList.length>0 && <p className={'text-orange font-semibold text-lg mb-4'}>سرفصل: <span className={'text-dark'}>{textBookList[0].subjectID}</span></p>}
            {
                textBookList.map((item, index) => (
                    <QuestionContainer key={`textBook${index}`}>
                        <img src={`${Routers.Base_URL_IMG}${item.content}`} alt={`question${index}`}/>
                    </QuestionContainer>
                ))
            }
        </>
    );
};

export default TextBook;