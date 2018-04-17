import React from 'react';


const Nav = props => {
        return (
            <div className='nav'>
                <div className='scoreboard'>Score: {props.score} High Score: {props.highScore}</div>
                <button onClick={() => this.resetGame()} id='reset' className='reset'>Reset High Score and Game!</button>

            </div>
        )
}

export default Nav;