import React from 'react';
import GridLoader from 'react-spinners/GridLoader';


function LoadingFallback() {


    return (

        <div className={"flex flex-col justify-center items-center fixed top-0 right-0 bottom-0 left-0 z-50"}>
            <GridLoader size={15} margin={2} color={'#fdc91b'} loading={true}/>
        </div>
    )

}

export default LoadingFallback;