import React, { useEffect } from 'react';
import NewAnecdoteForm from './components/NewAnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import FilterField from './components/FilterField'
import noteService from './services/notes'
import { store } from './index'
import { connect } from 'react-redux'

const App = () => {
  useEffect(() => {
    const fetchNotes = async() => {
      const notes = await noteService.getAllNotes()
      store.dispatch({type: 'INIT_ANECDOTES', payload: notes})
    }
    fetchNotes()
  }, [])
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