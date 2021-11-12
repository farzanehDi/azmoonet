import React from 'react';
import HomeBoardSection from "../../components/boardSection";
import WhyAzmoonet from "../../components/whyAzmoonetSection";
import WayOfSuccess from "../../components/wayOfSuccess";
import FreeTest from "../../components/freeTest";

const Home = () => {


    return (

        <main className={'bg-light'}>
            <HomeBoardSection/>
            <FreeTest/>
            <WhyAzmoonet/>
            <WayOfSuccess/>
        </main>

    );
};

export default Home;