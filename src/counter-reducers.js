const initalState = {
    counter: 0
}

const counterReducer = (state = initalState, action) => {
   
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

    return state
}

export default counterReducer;