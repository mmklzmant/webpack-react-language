export default (state = {content: "你好 ContactComponent"}, action) =>{
    switch (action.type) {
        case 'zh':
            return {content: "你好 ContactComponent"}
        default:
            return state;
    }
}