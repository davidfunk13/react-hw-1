import React from 'react';
import Header from './Header'
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