import React from 'react';
import AdoptionGateway from '../components/AdoptionGateway';
import JourneyVisualizer from '../components/JourneyVisualizer';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <>
            {/* <Hero /> */}
            <JourneyVisualizer />
            <AdoptionGateway />
        </>
    );
};

export default Home;
