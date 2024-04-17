import { configureStore, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { getAuth } from 'firebase/auth'

const questionsSlice = createSlice({
    name: 'questions',
    initialState: {
        posts: ['test', 'test'],
    },
    reducers: {
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuthenticated: false,
    },
    reducers: {
        setAuth(state, action) {
            state.isAuthenticated = action.payload
        }
    }
})

const playersSlice = createSlice({
    name: 'players',
    initialState: {
        players: [],
    },
    reducers: {
        addPlayer(state, action) {
            const min = 1;
            const max = 9999;
            state.players = [...state.players, { id: Math.floor(Math.random() * (max - min + 1)) + min, name: action.payload, round: 0, finished: false }]
        },
        removePlayer(state, action) {
            state.players = state.players.filter((player) => {
                return player.id !== action.payload})
        },
        incrementRound(state, action) {
            const player = state.players.find(p => p.id === action.payload)
            player.round++
        },
        playerFinished(state, action) {
            const player = state.players.find(p => p.id === action.payload)
            player.finished = true
        }
    }
})

export const fetchAPI = (state = questionsSlice.posts, action) => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
        state = res
    }).catch((err) => console.log(err))
}

export const { setAuth } = userSlice.actions

export const { addPlayer, removePlayer, playerFinished, incrementRound } = playersSlice.actions

export default configureStore({
    reducer: {
        questions: questionsSlice.reducer,
        user: userSlice.reducer,
        players: playersSlice.reducer
    },
})