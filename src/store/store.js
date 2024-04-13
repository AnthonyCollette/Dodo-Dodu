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
        setAuth (state, action) {
            state.isAuthenticated = action.payload
        }
    }
})

export const fetchAPI = (state = questionsSlice.posts, action) => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
        state = res
    }).catch((err) => console.log(err))
}

export const { setAuth } = userSlice.actions

export default configureStore({
    reducer: {
        questions: questionsSlice.reducer,
        user: userSlice.reducer
    },
})