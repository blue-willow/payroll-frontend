import {
    UPLOAD_FILE,
    LOAD_REPORT,
    SET_REPORT
} from './types';

const initialState = {
    report: {},
    loading: false
}

export default function (state = initialState, actions) {
    switch (actions.type) {
        case LOAD_REPORT:
            return {
                ...state,
                loading: true
            }
        case SET_REPORT:
            return {
                ...state,
                loading: false,
                report: actions.payload
            }
        case UPLOAD_FILE:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}