import React, { Component } from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Card from './components/Card/Card';
import cardImages from './cardImages.json'
import './App.css';

class App extends Component {
  state = {
    score: 0,
    highestScore: 0,
    cardImages: cardImages,
  }

  clickedTwice = id => {
    console.log(id)
    this.state.cardImages.forEach(element => {
      console.log('not hit')
      if (element.id === id){
        console.log('hit')
        if (element.beenClicked) {
          alert('you lose');
          this.resetGame()
          return false
        }
        element.beenClicked = true;
      }
    });
    this.randomizeCards(this.state.cardImages)
  }

  randomizeCards = array => {
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
    shuffle(this.state.cardImages)

    this.setState({ cardImages })
  }

  resetGame = cardImages => {
    console.log('reset')
    this.state.cardImages.forEach(element => {
      element.beenClicked = false;
      console.log(element.beenClicked)
    })
  }

  render() {
    return (
      <div className='container'>
        <Header />
        <div className='row background'>
          <div id='grid' className='col-md-12 grid'>
            {this.state.cardImages.map(data => (
              <Card randomize={() => this.randomizeCards(this.state.cardImages)} clickedTwice={this.clickedTwice} boolean={this.state.beenClicked} key={data.id} id={data.id} path={data.path} />
            ))}
          </div>
        </div>
        <Footer />
      </div>

    )
  }

}

export default App;
