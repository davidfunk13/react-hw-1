import React from 'react';
const grid = {
    eric: {
        // key/: 'eric',
        path: '../../images/gridimage.jpeg'
    },
    eric2: {
        // key: 'eric2',
        path: '../../images/gridimage.jpeg'
    },
    eric3: {
        // key: 'eric3',
        path: '../../images/gridimage.jpeg'
    },
    eric4: {
        // key: 'eric4',
        path: '../../images/gridimage.jpeg'
    },
    eric5: {
        // key: 'eric5',
        path: '../../images/gridimage.jpeg'
    },
    eric6: {
        // key: 'eric6',
        path: '../../images/gridimage.jpeg'
    },
    eric7: {
        // key: 'eric7',
        path: '../../images/gridimage.jpeg'
    },
    
}
const ImageGrid = props => {
    return (
        <div className='imagegrid'>
            {/* <p>hello</p> */}
        {Object.keys(grid).map(character =>  
                <div key={character}>
                    <img src={grid[character]['path']}/>
                </div>    
        )}
        </div>
    )
}


export default ImageGrid;