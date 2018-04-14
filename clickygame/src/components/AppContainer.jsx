import React from 'react';
import Header from './Header'
import Container from './Container'
import Body from './Body'
import Footer from './Footer';
import ImageGrid from './ImageGrid';
const AppContainer = () => {
    return (
        <div className='container'>
            <Header />
            <ImageGrid />
            <Footer />
        </div>

    )
}


export default AppContainer;