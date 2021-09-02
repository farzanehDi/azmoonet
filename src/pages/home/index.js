import React from 'react';
import Style from './home.module.css';

const Home = () => {
    return (

        <div className={`${Style.mainContaner} py-4`}>
            <div className={`container flex flex-col items-center sm:pt-20 pt-32 text-light ${Style.board}`}>
                <h1 className={'opacity-80 font-bold text-right w-full'}>آزمونت با آزمونت</h1>
                <p className={'text-justify text-xs'}>
                    آزمونت یک پلتفرم آموزشی هوشمند نوین می باشد که با اتکا به دانش هوش مصنوعی همگام با دانش آموز پیش می رود و برنامه مناسب درسی را نیز تدوین می کند.
                </p>
            </div>
        </div>


    );
};

export default Home;