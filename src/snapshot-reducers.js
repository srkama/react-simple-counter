const initalState = {
    snapshots:[]
}

const snapshotReducer = (state = initalState, action) => {
   
    if (action.type === 'TAKE_SNAPSHOT') {
        return {
            ...state,
            snapshots: state.snapshots.concat(action.counterValue)
        }
    }

    return state
}

export default snapshotReducer;