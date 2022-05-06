import React from 'react';
import Banner from '../Banner/Banner';
import FirstSection from '../FirstSection/FirstSection';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import SecondSection from '../SecondSection/SecondSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FirstSection></FirstSection>
            <Products></Products>
            <SecondSection></SecondSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;