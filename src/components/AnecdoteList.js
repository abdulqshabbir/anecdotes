import React from 'react'
import { createVoteAction } from './../reducers/anecdoteReducer'
import { showNotification, hideNotification } from './../reducers/notificationVisibilityReducer'
import { connect } from 'react-redux'
const AnecdoteList = ({ anecdotes, createVote, showNotification, hideNotification}) => {
  const handleVote = (id) => {
    createVote(id)
    showNotification()
    setTimeout(() => {
      hideNotification()
    }, 5000)
  }
  return(
    anecdotes
      .map(anecdote => (
        <div key={anecdote.id}>
          <div> {anecdote.content} # of votes: {anecdote.votes} </div>
          <button onClick={() => handleVote(anecdote.id)}> vote </button>
        </div>
      ))
  )
}

const sortAnecdotes = (anecdote1, anecdote2) => {
    if (anecdote1.votes > anecdote2.votes) {
      return -1
    } else if (anecdote1.votes < anecdote2.votes) {
      return 1
    } else {
      return 0
    }
  }

const mapStateToProps = (state) => {
  const { anecdotes, query } = state
  const anecdotesToShow = 
    anecdotes
      .filter(anecdote => anecdote.content.includes(query) ? anecdote : false)
      .sort(sortAnecdotes)

  return {
    anecdotes: anecdotesToShow,
    query: state.query
  }
}

const mapDispatchToProps = {
  createVote: createVoteAction,
  showNotification,
  hideNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)