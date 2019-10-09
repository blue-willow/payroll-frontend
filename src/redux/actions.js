import { 
    UPLOAD_FILE,
    LOAD_REPORT,
    SET_REPORT
} from './types';
import axios from 'axios';

export const uploadFile = (formData) => (dispatch) => {
    dispatch({ type: UPLOAD_FILE });
    axios.post('/entries/uploadFile', formData).then(() => {
        dispatch(getReport());
    }).catch(err => console.log(err));
}

export const getReport = () => (dispatch) => {
    dispatch({ type: LOAD_REPORT });
    axios.get('/payrolls').then(res => {
        dispatch({
            type: SET_REPORT,
            payload: res.data
        })
        console.log('----actions:::getReport:::', 'res.data: ', res.data);
    }).catch(err => {
            console.log('----actions:::getReport:::', 'err: ', err);
            dispatch({
                type: SET_REPORT,
                payload: []
            })
        })
    }