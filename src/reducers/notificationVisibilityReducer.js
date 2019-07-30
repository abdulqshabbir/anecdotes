import { store } from '../index'

const message = 'Here is a message from the notification component!  Watch it disappear...'

export const showNotification = () => {
    store.dispatch({ type: 'VISIBLE'})
}

export const hideNotification = () => {
    store.dispatch({ type: 'HIDDEN' })
}

const notificationVisibilityReducer = (state = message, action) => {
    switch(action.type) {
        case 'VISIBLE':
            return true
        case 'HIDDEN':
            return false
        default:
            return false
    }
}

export default notificationVisibilityReducer
