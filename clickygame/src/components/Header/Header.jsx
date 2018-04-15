import React from 'react';
import { width } from 'window-size';

const styles = {
    header: {
        background: 'red',
        width: 'auto',
        height: '100%',
        textAlign: 'center',
    }
}

const Header = props => {
    return (
        <div style={styles.header} className='header'>
            <h1>Hello React Hw</h1>
        </div>
    )
}


export default Header;