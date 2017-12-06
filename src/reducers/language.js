//About Reducer
export default (state = {name: "lm"}, action) =>{
    switch (action.type) {
        case 'zh':
            return {name: "lm"}
        default:
            return state;
    }
}