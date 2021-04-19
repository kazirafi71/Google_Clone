import React from 'react';
import Home__Body from '../../components/Home Body/Home__Body';
import Navigation from '../../components/Navbar/Navigation';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <Navigation/>
            <Home__Body/>
        </div>
    );
};

export default Home;