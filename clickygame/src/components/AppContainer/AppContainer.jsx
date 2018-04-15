import React from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Card from '../Card/Card';
import cardImages from './cardImages.json'
const AppContainer = () => {
    return (
        <div className='container'>
            <Header />
            {cardImages.map( data => (
                    <Card id={data.id} path={data.path} />
                ))}
            <Footer />
        </div>

    )
}


export default AppContainer;