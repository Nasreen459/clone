import React from 'react'
import './homeScreen.css'
import HomeBanner from './HomeBanner/homeBanner';
import HomeDetail from './HomeDetails/homeDetails';
import Footer from '../../Components/Footer/footer';

const HomeScreen = () => {
    return (
        <div className='homeScreen'>
            <HomeBanner />
            <HomeDetail />
            <Footer />
                

        </div>
        

    )
}

export default HomeScreen;