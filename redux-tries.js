const redux = require('redux');

const initialState={counter:0}

//reducers
const rootReducer = (state=initialState, action) => {
    console.log(action);
    if(action.type === "INCREMENT") {
        return {
            counter: state.counter + 1
        };
    } else if (action.type === "ADD") {
        return {
            counter: state.counter + action.value
        };
    } else if (action.type === "SUB") {
        return {
            counter: state.counter - action.value
        };
    } else if (action.type === "DECREMENT") {

        return {
            counter: state.counter - 1
        };
    }
    return state;
}

//Store
const store = redux.createStore(rootReducer);




//Subscribers
store.subscribe(()=>{
    console.log('[Subscription]',store.getState());
})

//Dispatches
store.dispatch({type:"INCREMENT"})
store.dispatch({type:"ADD", value:1000})
store.dispatch({type:"SUB", value:100})
store.dispatch({type:"DECREMENT"})

