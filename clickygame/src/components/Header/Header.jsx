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
            <img className='img-fluid' src="/images/banner.jpg" alt="Overwatch Clicky Game!"/>
        </div>
    )
}


export default Header;