import React from 'react';
import { connect } from 'react-redux';

import Anime from './Anime'

const AnimeList = props => {
    return (
        <>
        <h1>ようこそ</h1>
        <p>{props.test}</p>
        <button>入る</button>

        </>
    )
}

const mapStateToProps = state => {
    return {
        test: state.test
    }
}

export default connect(mapStateToProps)(AnimeList);