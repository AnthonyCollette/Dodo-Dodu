// import { configureStore, createSlice } from '@reduxjs/toolkit'
// import axios from 'axios'

// const apiSlice = createSlice({
//   name: 'api',
//   initialState: {
//     posts: [],
//   },
//   reducers: {
//     fetchAPI: (state) => {
//       let posts

//       axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => posts = res.data)

//       state.posts = posts
//     }
//   }
// })

// // export default function fetchAPI(state = initialState, action) {
// //   switch (action.type) {


// //   }
// // }

// export default configureStore({
//   reducer: {
//     apiSlice: apiSlice.api
//   },
// })