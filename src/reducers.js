const initalState = {
    counter: 0,
    snapshots:[]
}

const rootReducer = (state = initalState, action) => {
   
    if (action.type === 'INCREMENT') {
        // console.log(action);
        return {
            ...state,
            counter : state.counter + (action.value ? action.value : 1)
        }
    }

    if (action.type === 'DECREMENT') {
        // console.log(action);
        return {
            ...state,
            counter : state.counter - (action.value ? action.value : 1)
        }
    }

    if (action.type === 'TAKE_SNAPSHOT') {
        return {
            ...state,
            snapshots: state.snapshots.concat(state.counter)
        }
    }

    return state
}

export default rootReducer;