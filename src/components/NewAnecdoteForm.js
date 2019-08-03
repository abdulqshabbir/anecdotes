import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { getId } from '../helperFunctions/generateId'
import { connect } from 'react-redux'



const NewAnecdoteForm = ({ createAnecdote }) => {
    const getAnecdoteOnFormSubmit = (e) =>  {
      e.preventDefault()
      const newNote = {
        content: e.target.note.value,
        votes: 0,
        id: getId()
      }
      e.target.note.value = ''
      createAnecdote(newNote)
    }
    return(
        <form onSubmit={ getAnecdoteOnFormSubmit }>
            <div>
            <input name="note" />
            <button type='submit'>create note</button>
            </div>
        </form>
    )
}

const mapDispatchToProps = {
  createAnecdote
}

export default connect(null, mapDispatchToProps)(NewAnecdoteForm)