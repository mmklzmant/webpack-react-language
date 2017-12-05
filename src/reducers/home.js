export default (state = {content: "你好 HomeComponent"}, action) => {
    switch (action.type) {
        case 'zh':
            return {content: "你好 HomeComponent"}
        default:
            return state
    }
}