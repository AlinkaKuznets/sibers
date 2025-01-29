import { createSlice, configureStore } from '@reduxjs/toolkit'
import { db } from "./firebase.config";
import { doc, getDoc } from "firebase/firestore";

const userStore = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

export const { incremented, decremented } = counterSlice.actions

const store = configureStore({
  reducer: counterSlice.reducer
})
store.subscribe(() => console.log(store.getState()))

store.dispatch(incremented())