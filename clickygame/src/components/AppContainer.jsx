import React from 'react';
import Header from './Header'
import Container from './Container'
import Body from './Body'
import Footer from './Footer';
import ImageGrid from './ImageGrid';
const AppContainer = () => {
    return (
        <Container>
            <Header />
            <ImageGrid/>
            <Footer />
        </Container>
    )
}


export default AppContainer;