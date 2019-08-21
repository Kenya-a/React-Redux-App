import React from 'react';
import { connect } from 'react-redux';
import { enterButton } from '../actions/action'

import Anime from './Anime'

// import { Eclipse } from 'react-loading-io'


const AnimeList = props => {
    return (
        <>
        <h1>ようこそ</h1>
        <p>{props.test}</p>
        <button onClick={props.enterButton}>{props.isLoading ? ('loading') : ('入る')}</button>

        {props.anime && props.anime.map(e => <Anime key = {e.title} el = {e} />)}
       
        </>
    )
}

const mapStateToProps = state => {
    return {
        test: state.test,
        isLoading: state.isLoading,
        anime: state.anime
    }
}

export default connect(mapStateToProps, { enterButton })(AnimeList);