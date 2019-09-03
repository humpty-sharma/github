export const reducer = (state = {
    searchMode: 'Search User',
    urlMode: 'https://api.github.com/search/users?q=',
    query: '',
    isActive: true,
    userUrl: '',
    reposUrl: ''
} , action) => {
    switch (action.type) {
        case 'USER':
            return Object.assign({}, action);
        case 'REPO':
            return Object.assign({}, action);
        case 'QUERY':
            return Object.assign({}, action);
        case 'ACTIVITY':
            return Object.assign({}, action);
        case 'DETAILS':
            return Object.assign({}, action);
        default:
            return state
    }
}



export default reducer;