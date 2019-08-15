import axios from 'axios';

export const FETCH_ANIME_DATA_START = 'FETCH_ANIME_DATA_START';
export const FETCH_ANIME_DATA_SUCCESS = 'FETCH_ANIME_DATA_SUCCESS';
export const FETCH_ANIME_DATA_FAILURE = 'FETCH_ANIME_DATA_FAILURE';

export const enterButton = () => {
    return dispatch => {
        dispatch({ type: FETCH_ANIME_DATA_START});

        axios.get(`https://api.jikan.moe/v3/search/anime?q=tokyo%20ghoul&limit=2`)

            .then(response => {
                console.log(response.data.results)
                dispatch({ type: FETCH_ANIME_DATA_SUCCESS, payload: response.data.results})
            })

            .catch(error => {
                console.log('Error', error)
                dispatch({ type: FETCH_ANIME_DATA_FAILURE, payload: error.response})
            })
    }
}