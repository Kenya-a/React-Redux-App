import React from 'react';

const Anime = props => {
    console.log('this', props)
    return (
        <div>
            <h3>{props.el.title}</h3>
            <p>Anime Description</p>
        </div>
    )
}

export default Anime