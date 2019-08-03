import noteService from './../services/notes'

//------------------ Action Creators -------------------------//

export const incrementVote = (anecdote) => {
  return async dispatch => {
    await noteService.incrementVote(anecdote)
    dispatch({ 
      type: 'INCREMENT_VOTE',
      id: anecdote.id
    })
  }
}

export function initializeAnecdotes() {
  return async dispatch => {
    const notes = await noteService.getAllNotes()
    dispatch({
      type: 'INIT_ANECDOTES',
      payload: notes
    })
  }
}

export const createAnecdote = (newAnecdote) => {
  return async dispatch => {
    const anecdote = await noteService.createNote(newAnecdote)
    dispatch({
      type: 'NEW_ANECDOTE',
      payload: anecdote
    })
  }
}

//---------------------- Reducer  -------------------------//

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_ANECDOTES':
      return action.payload

    case 'NEW_ANECDOTE':
      return [...state, action.payload]

    case 'INCREMENT_VOTE':
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
      
    default:
      return state
  }
}

export default anecdoteReducer