//Navigator Reducer
export default (state = {lang: "语言切换"}, action) => {
    switch (action.type) {
        case 'zh':
            return {lang: '中文'}
        case 'en':
            return {lang: 'English'}
        default:
            return state;
    }
}