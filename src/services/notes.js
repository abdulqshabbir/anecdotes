import axios from 'axios'

const getAllNotes = async () => {
    const response = await axios.get('http://localhost:3001/anecdotes')
    return response.data
}

const createNote = async (note) => {
    const response = await axios.post('http://localhost:3001/anecdotes', note)
    return response.data
}

const incrementVote = async (anecdote) => {
    const updatedAnecdote = {
        ...anecdote,
        votes: anecdote.votes + 1
    }
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    const response = await axios.put(`http://localhost:3001/anecdotes/${anecdote.id}`, JSON.stringify(updatedAnecdote), config)
    return response.data
}

const noteService = {
    getAllNotes,
    createNote,
    incrementVote
}

export default noteService