import {createStore, 
        combineReducers, 
        applyMiddleware, 
        compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer'

const initialState = {};
const middleware = [thunk];

const reducers = combineReducers({
    UI: reducer
})

const store = createStore(reducers, initialState, compose(applyMiddleware(...middleware)));
export default store;