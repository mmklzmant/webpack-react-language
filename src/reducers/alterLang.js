//全局reducer
export default (state = {language: "en"}, action) => {
    switch (action.type) {
        case 'en':
            return {language: 'English'}
        case 'zh':
            return {language: '中文'}
        default:
            return state;
    }
}