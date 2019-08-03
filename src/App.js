import React from 'react';
import NewAnecdoteForm from './components/NewAnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import FilterField from './components/FilterField'
import { connect } from 'react-redux'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      < FilterField />
      < Notification />
      < AnecdoteList />
      < NewAnecdoteForm />
    </div>
  )
}

export default connect()(App)