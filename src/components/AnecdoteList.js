import React, {useEffect} from 'react'
import { incrementVote } from './../reducers/anecdoteReducer'
import { showAndRemoveNotification } from './../reducers/notificationVisibilityReducer'
import { connect } from 'react-redux'
import { initializeAnecdotes } from './../reducers/anecdoteReducer'

const AnecdoteList = (props) => {
  const { 
          anecdotes, 
          incrementVote, 
          showAndRemoveNotification,
          initializeAnecdotes
        } = props

  useEffect(() => {
    initializeAnecdotes()
  }, [initializeAnecdotes])
  
  const handleVote = (anecdote) => {
    incrementVote(anecdote)
    showAndRemoveNotification(`${anecdote.content} was just voted for!`)
  }
  return(
    anecdotes
      .map(anecdote => (
        <div key={anecdote.id}>
          <div> {anecdote.content} # of votes: {anecdote.votes} </div>
          <button onClick={() => handleVote(anecdote)}> vote </button>
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
    anecdotes: anecdotesToShow
  }
}

const mapDispatchToProps = {
  initializeAnecdotes,
  incrementVote,
  showAndRemoveNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)