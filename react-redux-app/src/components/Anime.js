import React from 'react';

const Anime = props => {
    console.log('this', props)
    return (
        <div>
            <h3>{props.el.title}</h3>
            <img src = {props.el.image_url} alt = {props.el.name}/>
            <p>{props.el.synopsis}</p>
        </div>
    )
}

export default Anime