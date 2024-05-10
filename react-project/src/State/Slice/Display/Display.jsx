import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
const initialState = {
    value:'none'
}
export const DisplaySlice = createSlice({
    name:'display',
    initialState,
    reducers:{
        changed:(state)=>{
            state.value = 'flex'
        },
        changedNone:(state)=>{
            state.value = 'none'
        }
    }
})
export const {changed,changedNone} = DisplaySlice.actions
export default DisplaySlice.reducer