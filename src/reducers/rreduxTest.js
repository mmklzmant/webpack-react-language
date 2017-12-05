// Reducer
export default (state = { count: 0, msg: "增加" }, action) => {
    const count = state.count;
    const msg = state.msg;
    switch (action.type) {
        case 'increase':
            return { count: count + 1, msg: msg }
        default:
            return state
    }
}