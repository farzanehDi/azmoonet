import React, {useEffect, useState} from 'react';
import styled from "styled-components";
// import {useViewport} from "../../utilities/hook";
import axios from "axios";
import {Routers} from "../../utilities/configUrl";
import history from "../../utilities/history";
import {useDispatch} from "react-redux";

const MyLessons = () => {

    // const {width} = useViewport();
    const dispatch = useDispatch();
    const [courseList, setCourseList] = useState([]);

    const Pointer = styled.div`
      width: 17%;
      height: 50px;
      position: relative;
      cursor: pointer;
      &:hover {
        font-weight: bold;
        font-size: 15px;
      }
      background: ${props => `${props.bg ? props.bg : 'white'}`};

      @media (max-width: 768px) {
        width: 35%;
      }

      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 0;
        border-left: 25px solid #fcc91b;
        border-top: 25px solid transparent;
        border-bottom: 25px solid transparent;
      }

      &:before {
        content: "";
        position: absolute;
        right: -25px;
        bottom: 0;
        width: 0;
        height: 0;
        border-left: 25px solid;
        border-left-color: ${props => `${props.bg ? props.bg : 'white'}`};
        border-top: 25px solid transparent;
        border-bottom: 25px solid transparent;
      }
    `;

    useEffect(() => {
        dispatch({type: 'loading', payload: true});
        axios(Routers.COURSE_LIST)
            .then(function (response) {

                dispatch({type: 'loading', payload: false});
                setCourseList(response.data)


            }).catch(function (error) {
            dispatch({type: 'loading', payload: false});
            console.log('course List error', error)
        });

    }, [dispatch])

    return (
        <>


            {
                courseList.map((item, index) => (
                    <div key={`myCoursesList${index}`}>
                        <p className={'text-orange font-semibold text-lg'}>سرفصل: <span className={'text-dark'}>{item.name}</span></p>
                        <div className={`flex gap-3 mt-2 mr-5 mb-5`}>
                            <Pointer bg={'white'} className={'flex items-center justify-center pl-5 text-xs'}>
                                <p>آزمون</p>
                            </Pointer>
                            <Pointer bg={'red'} className={'flex items-center justify-center pl-5 text-xs'}
                            onClick={()=>history.push(`/profile/textbook/${item.id}`)}>
                                <p>درسنامه</p>
                            </Pointer>
                            {/*<Pointer bg={'orange'} className={'flex items-center justify-center pl-5 text-xs'}>*/}
                            {/*    <p>درسنامه اول</p>*/}
                            {/*</Pointer>*/}

                        </div>
                        {/*<p className={'mt-2  mb-5'}>درصد شما از این آزمون: <span className={'text-green'}>83%</span></p>*/}
                    </div>
                ))
            }

        </>
    );
};

export default MyLessons;