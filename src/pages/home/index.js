import React from 'react';
import HomeBoardSection from "../../components/boardSection";
import WhyAzmoonet from "../../components/whyAzmoonetSection";
import WayOfSuccess from "../../components/wayOfSuccess";

const Home = () => {


    return (

        <main className={'bg-light'}>
            <HomeBoardSection/>
            <WhyAzmoonet/>
            <WayOfSuccess/>
        </main>

    );
};

export default Home;