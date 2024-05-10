import { configureStore } from '@reduxjs/toolkit'
import  changedReducer  from './Slice/Display/Display'
import listReduser from './Slice/List/ListSlice'
export const store = configureStore({
  reducer: {
    display: changedReducer,
    list: listReduser,
  },
})