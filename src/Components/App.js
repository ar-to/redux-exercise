import React from 'react';
import { createStore, combineReducers } from 'redux';
import { ADD_TWO, ADD_THREE } from '../Redux/Actions/ActionTypes';

const defaults = {
    name: 'Me',
    about: [
        {
            birthday: 'december'
        },
        {
            age: 28
        }
    ]
}

//reducer
function reducer(state=0, action) {
    switch (action.type) {
        case 'ADD':
            return state +1
        case ADD_TWO:
            return state + 2
        case 'PAY':
            return action.payload +2
        case 'MINUS':
            return state -1
        case 'MULTIPLY':
            return state * 2
        default:
            return state
    }
}

const reducer2 = (state=defaults, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            state = {...state, name: action.payload}
        default:
            return state;
    }
}

const reducer3 = (state=[], action) => {
    return state;
}

const reducers = combineReducers({
    reducer,
    reducer2,
    reducer3
})


let store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    console.log("store changes", store.getState());
})

//action creator
const multiply = () => {
    return {
        type: 'MULTIPLY',
        payload: 2
    }
}

//dispatch
store.dispatch({ type: 'ADD'})
// store.dispatch({ type: 'PAY', payload: 10})
// store.dispatch({ type: 'MINUS'})
// store.dispatch(multiply())
store.dispatch({ type: 'CHANGE_NAME', payload: 'Other'})
store.dispatch({ type: 'CHANGE_NAME', payload: 'Another'})
store.dispatch({ type: ADD_TWO})

const App = () => {
    return (
        <div>
            <p>Testing</p>
            {console.log('React its working!')}
        </div>
    )
}

export default App;