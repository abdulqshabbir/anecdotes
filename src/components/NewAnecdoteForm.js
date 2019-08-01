import React from 'react'
import { createNewAnecdoteAction } from '../reducers/anecdoteReducer'
import { getId } from '../helperFunctions/generateId'
import { connect } from 'react-redux'

const NewAnecdoteForm = ({ createAnecdote }) => {
    const handleNoteCreation = (e) => {
        e.preventDefault()
        const newNote = {
          content: e.target.note.value,
          votes: 0,
          id: getId()
        }
        createAnecdote(newNote)
      }

    return(
        <form onSubmit={handleNoteCreation}>
            <div>
            <input name="note" />
            <button type='submit'>create note</button>
            </div>
        </form>
    )
}

const mapDispatchToProps = () => {
  return {
    createAnecdote: createNewAnecdoteAction
  }
}

export default connect(null, mapDispatchToProps)(NewAnecdoteForm)