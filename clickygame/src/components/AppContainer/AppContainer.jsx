import React from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Card from '../Card/Card';
import cardImages from './cardImages.json'
const AppContainer = () => {
    return (
        <div className='container'>
            <Header />
            <Card name={cardImages.name} />
            <Footer />
        </div>

    )
}


export default AppContainer;