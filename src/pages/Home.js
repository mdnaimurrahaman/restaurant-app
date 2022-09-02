import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import About from './About';
import TopBanner from './TopBanner';

const Home = () => {
    return (
        <Helmet title="Home">
            <TopBanner/>
            <About/>
        </Helmet>
    );
};

export default Home;