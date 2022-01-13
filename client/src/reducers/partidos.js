import{
    GET_ALL_DEPARTAMENTOS,
    GET_ALL_CAPITALES,
    GET_ALL_NACIONAL,
    POST_ERROR
} from '../actions/types'

const initialState = {
    partidos: [],
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
    const { type, payload, datos } = action;

    switch(type) {
        case GET_ALL_DEPARTAMENTOS:
        case GET_ALL_CAPITALES:
        case GET_ALL_NACIONAL:
            return {
                ...state,
                partidos: payload,
                loading: false
            }     
           
        case POST_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state;
    }

}