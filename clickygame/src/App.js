import React, { Component } from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Card from './components/Card/Card';
import cardImages from './cardImages.json'
import './App.css';

class App extends Component {
  state = {
    cardImages
  }
  
  shuffleCards = (cards) => {
    const array = this.state.cardImages
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
    
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    
      return array;
    }
    shuffle(array)
    this.setState({cardImages})
    console.log(cards.id)
  }

  render() {
    return (
      <div className='container'>
        <Header />
        <div className='row background'>
          <div id='grid' className='col-md-12 grid'>
            {this.state.cardImages.map(data => (
              <Card shuffleCards={this.shuffleCards} key={data.id} id={data.id} path={data.path} />
            ))}
          </div>
        </div>
        <Footer />
      </div>

    )
  }

}

export default App;
