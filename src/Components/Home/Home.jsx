import React from 'react';
import Banner from '../../Pages/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-auto px-10'>
            <Banner ></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;