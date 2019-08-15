import axios from 'axios';

export const FETCH_ANIME_DATA = 'FETCH_ANIME_DATA';

export const enterButton = () => {
    return dispatch => {
        dispatch({ type: FETCH_ANIME_DATA});
    }
}