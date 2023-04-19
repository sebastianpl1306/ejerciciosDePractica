import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counterSlice',
  initialState:{
    counter: 2
  },
  reducers: {
    increment: (state) => {
      state.counter += 1
    },
    incrementBy: (state, action) => {
      state.counter += action.payload
    },
    decrement: (state) => {
      state.counter -= 1
    }
  },
})

export const { increment, incrementBy, decrement } = counterSlice.actions;