import { store } from './../index'
//------------------ Action Creators -------------------------//

export const createVoteAction = (id) => {
  return { 
    type: 'VOTE',
    id: id
  }
}

export const createNewAnecdoteAction = (anecdote) => {
  store.dispatch({ type: 'NEW_ANECDOTE', payload: anecdote })
}

//---------------------- Reducer  -------------------------//

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_ANECDOTES':
      return action.payload
    case 'VOTE':
      const anecdoteToUpdate = state.find(a => a.id === action.id)
      const updatedObject = {
        ...anecdoteToUpdate,
        votes: anecdoteToUpdate.votes + 1
      }
      return state.map(a => {
        if (a.id === action.id) {
          return updatedObject
        }
        return a
      })

    case 'NEW_ANECDOTE':
     return [...state, action.payload]
     
    default:
      return state
  }
}

export default anecdoteReducer