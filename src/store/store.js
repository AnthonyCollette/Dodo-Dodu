import { configureStore, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const questionsSlice = createSlice({
    name: 'questions',
    initialState: {
        posts: ['test', 'test'],
    },
    reducers: {
    }
})

export const fetchAPI = (state = questionsSlice.posts, action) => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
        state = res
    }).catch((err) => console.log(err))
}

export default configureStore({
    reducer: {
        questions: questionsSlice.reducer,
    },
})