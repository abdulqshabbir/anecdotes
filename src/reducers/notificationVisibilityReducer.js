const message = 'Here is a message from the notification component!  Watch it disappear...'

export const showAndRemoveNotification = (content, durationInSeconds) => {
    return dispatch => {
        dispatch({
            type: 'VISIBLE',
            isVisible: true,
            content
        })
        setTimeout(() => {
            dispatch({
                type: 'HIDDEN',
                isVisible: false
            })
        }, durationInSeconds*1000)
    }
}

const notificationVisibilityReducer = (state = message, action) => {
    switch(action.type) {
        case 'VISIBLE':
            return {
                isVisible: true,
                content: action.content
            }
        case 'HIDDEN':
            return {
                isVisible: false,
                content: ''
            }
        default:
            return {
                isVisible: false,
                content: ''
            }
    }
}

export default notificationVisibilityReducer
