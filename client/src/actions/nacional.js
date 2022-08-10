import axios from 'axios';
import { 
    GET_ALL_NACIONAL, 
    POST_ERROR 
} from './types';

//Get All Capitales
export const getNacional = () => async dispatch => {    
    
    try {        
        const partidos = await axios.get(`/xml/getnacional`);
        
        dispatch({
            type: GET_ALL_NACIONAL,
            payload: partidos.data,
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload:{ msg: err.response.statusText, status: err.response.status }
        })
    }
}