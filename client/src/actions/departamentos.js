import axios from 'axios';
import { 
    GET_ALL_DEPARTAMENTOS, 
    POST_ERROR 
} from './types';

//Get All Departamentos
export const getDepartamento = departamento => async dispatch => {
    let temp = departamento.replaceAll('%20', ' '); 
    
    try {        
        const res = await axios.get(`/xml/getdepartamento/${temp}`);

        dispatch({
            type: GET_ALL_DEPARTAMENTOS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload:{ msg: err.response.statusText, status: err.response.status }
        })
    }
}