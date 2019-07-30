export const setQueryActionCreator = (query) => (
    {
        type: 'CHANGE',
        query: query
    }
)
const queryReducer = (state = '', action) => {
    switch(action.type) {
        case 'CHANGE':
            return action.query
        default:
            return state
    }
}

export default queryReducer