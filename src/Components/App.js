import React from 'react';
import { createStore, combineReducers } from 'redux';

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

const reducers = combineReducers({
    reducer,
    reducer2
})


let store = createStore(reducers);

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

const App = () => {
    return (
        <div>
            <p>Testing</p>
            {console.log('React its working!')}
        </div>
    )
}

export default App;