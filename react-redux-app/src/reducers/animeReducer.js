import {
    FETCH_ANIME_DATA,
} from '../actions'

export const initialState = {
    anime: [],
    test: 'Tokyo Ghoul'
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ANIME_DATA:

            return{
                ...state,
            };
        default:
            return state;
    }
}
