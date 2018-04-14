import React from 'react';

const styles = {
    image: {
        width: '150px',
        height: '200px'
    }
}
const grid = {
    eric: {
        path: '../../images/gridimage.jpeg'
    },
    eric2: {
        path: '../../images/gridimage.jpeg'
    },
    eric3: {
        path: '../../images/gridimage.jpeg'
    },
    eric4: {
        path: '../../images/gridimage.jpeg'
    },
    eric5: {
        path: '../../images/gridimage.jpeg'
    },
    eric6: {
        path: '../../images/gridimage.jpeg'
    },
    eric7: {
        path: '../../images/gridimage.jpeg'
    },
    
}
const ImageGrid = props => {
    return (
        <div className='imagegrid'>
            {/* <p>hello</p>

        {Object.keys(grid).map( character =>
                    <div>
                        <div key={character}>
                            <img style={styles.image} src={grid[character]['path']} alt=''/>
                        </div>    
                    </div>
        )} */}
        </div>
    )
}


export default ImageGrid;