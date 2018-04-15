import React, {Component} from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Card from '../Card/Card';
import cardImages from './cardImages.json'
import './AppContainer.css';

class AppContainer extends Component {
    state = {
        cardImages
    }
    clickCard = id => {
        console.log(id)
    }

    render() {
        return (
            <div className='container'>
                <Header />
                <div className='row background'>
                    <div id='grid' className='col-md-12 grid'>
                        {this.state.cardImages.map(data => (
                            <Card clickCard={this.clickCard} key={data.id} id={data.id} path={data.path} />
                        ))}
                    </div>
                </div>
                <Footer />
            </div>

        )
    }

}


export default AppContainer;