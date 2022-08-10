import axios from 'axios';
import { 
    GET_ALL_CAPITALES, 
    POST_ERROR 
} from './types';

//Get All Capitales
export const getCapital = capital => async dispatch => {        
    
    try {        
        const partidos = await axios.get(`/xml/getcapitales/${capital}`);    

        dispatch({
            type: GET_ALL_CAPITALES,
            payload: partidos.data,
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload:{ msg: err.response.statusText, status: err.response.status }
        })
    }
}