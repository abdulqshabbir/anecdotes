import React from 'react'
import { createVoteAction } from './../reducers/anecdoteReducer'
import { showNotification, hideNotification } from './../reducers/notificationVisibilityReducer'
import { connect } from 'react-redux'

const sortAnecdotes = (anecdote1, anecdote2) => {
    if (anecdote1.votes > anecdote2.votes) {
      return -1
    } else if (anecdote1.votes < anecdote2.votes) {
      return 1
    } else {
      return 0
    }
  }

const vote = (id) => {
    createVoteAction(id)
    showNotification()
    setTimeout(() => {
      hideNotification()
    }, 5000)
}

const AnecdoteList = ({ anecdotes, query }) => {
  console.log(anecdotes)
  return(
    anecdotes
      .filter(anecdote => anecdote.content.includes(query) ? anecdote : false)
      .sort(sortAnecdotes)
      .map(anecdote => (
        <div key={anecdote.id}>
          <div> {anecdote.content} # of votes: {anecdote.votes} </div>
          <button onClick={() => vote(anecdote.id)}> vote </button>
        </div>
      ))
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    query: state.query
  }
}

export default connect(mapStateToProps, null)(AnecdoteList)