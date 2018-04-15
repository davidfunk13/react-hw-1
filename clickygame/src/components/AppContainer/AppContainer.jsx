import React from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Card from '../Card/Card';
import cardImages from './cardImages.json'
import './AppContainer.css';
const AppContainer = () => {
    return (
        <div className='container'>
            <Header />
            <div className='row background'>
                <div id='grid' className='col-md-12 grid'>
                    {cardImages.map(data => (
                        <Card id={data.id} path={data.path} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>

    )
}


export default AppContainer;