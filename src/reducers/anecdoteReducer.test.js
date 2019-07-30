import deepFreeze from 'deep-freeze'
import reducer from './anecdoteReducer'

const testInitialState = [
    {
        content: 'If it hurts, do it more often',
        id: '1',
        votes: 0
    },
    {
        content: 'Adding manpower to a late software project makes it later!',
        id: '2',
        votes: 0
    }
]

test('votes are properly icremented', () => {
    deepFreeze(testInitialState)

    const expectedState = [
        {
            content: 'If it hurts, do it more often',
            id: '1',
            votes: 0 
        },
        {
            content: 'Adding manpower to a late software project makes it later!',
            id: '2',
            votes: 1
        }
    ]
    const newState = reducer(testInitialState, { type: 'VOTE', id: '2' })
    expect(newState).toEqual(expectedState)
})

test('new anecdotes can be added', () => {
    deepFreeze(testInitialState)

    const expectedState = [
        {
            content: 'If it hurts, do it more often',
            id: '1',
            votes: 0 
        },
        {
            content: 'Adding manpower to a late software project makes it later!',
            id: '2',
            votes: 0
        },
        {
            content: 'New anecdote added',
            id: '3',
            votes: 0
        }
    ]

    const newNote = {
        content: 'New anecdote added',
        id: '3',
        votes: 0
    }

    const newState = reducer(testInitialState, { type: 'NEW_ANECDOTE', payload: newNote })
    expect(newState).toEqual(expectedState)
})