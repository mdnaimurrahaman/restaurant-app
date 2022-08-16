import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import TopBanner from './TopBanner';

const Home = () => {
    return (
        <Helmet title="Home">
            <TopBanner/>
        </Helmet>
    );
};

export default Home;