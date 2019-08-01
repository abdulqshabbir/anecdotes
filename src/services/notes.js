import axios from 'axios'

const getAllNotes = async () => {
    const response = await axios.get('http://localhost:3001/anecdotes')
    return response.data
}

const noteService = {
    getAllNotes
}

export default noteService