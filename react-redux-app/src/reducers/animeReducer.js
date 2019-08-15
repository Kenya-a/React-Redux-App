import {
    FETCH_ANIME_DATA_START,
    FETCH_ANIME_DATA_SUCCESS,
    FETCH_ANIME_DATA_FAILURE,

} from '../actions'

export const initialState = {
    anime: [],
    test: 'Tokyo Ghoul',
    isLoading: false,
    error:''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ANIME_DATA_START:
            return{
                ...state,
                isLoading: true,
                error:''
            };

        case FETCH_ANIME_DATA_SUCCESS:
            return {
            ...state,
            isLoading: false,
            error:''
            };
    
        case FETCH_ANIME_DATA_FAILURE:
            return{
            ...state,
            isLoading: true,
            error: 'Failed to Load'
            };


        default:
            return state;
    }
}
