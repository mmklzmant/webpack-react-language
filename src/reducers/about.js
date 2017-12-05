//About Reducer
export default (state = {content: "你好，AboutComponent"}, action) =>{
    switch (action.type) {
        case 'zh':
            return {content: "你好，AboutComponent"}
        default:
            return state;
    }
}