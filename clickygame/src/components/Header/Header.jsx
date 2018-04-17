import React from 'react';
import { width } from 'window-size';
import './Header.css'

// const styles = {
//     header: {
//         background: 'red',
//         width: 'auto',
//         height: '100%',
//         textAlign: 'center',
//     }
// }

const Header = props => {
    return (
        <div className='header'>
            <img id='banner' className='img-fluid' src="/images/banner.jpg" alt="Overwatch Clicky Game!"/>
            <div id='scoreboard' className='scoreboard'>Score: {props.score} || High Score</div>
            <button id='reset' className='reset'>Reset Game</button>
        </div>
    )
}


export default Header;