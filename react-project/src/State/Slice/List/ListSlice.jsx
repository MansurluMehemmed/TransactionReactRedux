import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import React from 'react'
const initialState =  {
    isLoading: false,
    data:[
        {
            from:'',
            to:'',
            amount:'',
        }
    ],
    error:false
    
}
export const fetchTodo  = createAsyncThunk('fetchTodo',async()=>{
    const data = await fetch('https://acb-api.algoritmika.org/api/transaction')
    return data.json()
})
export const postTodo = createAsyncThunk('postTodo',async(values)=>{
    const data = await fetch('https://acb-api.algoritmika.org/api/transaction',{
        method:'POST',
        headers:{
            'Content-text':'aplication.json'
        },
        body: JSON.stringify({
            from:values.from,
            to:values.to,
            amount:values.amount

        })
    }).then(res=>res.json()).then(data=>data)
})
// export const postTodo  = createAsyncThunk('postTodo',async(values)=>{
//     const data = await fetch('https://acb-api.algoritmika.org/api/transaction',{
//         method:'POST',
//         headers:{
          
//             "Content-Type" : "aplication/json" 
//         },
//         body: JSON.stringify({
//             from:  values.from,
//             // to:  values.to,
//             // amount:  values.amount
//         })
//     }).then(res=>res.json()).then(data=>data)
//     return data.json()
// })
export const ListSlice = createSlice({
    name:'list',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchTodo.pending,(state,action)=>{
            state.isLoading = true
        })
        builder.addCase(fetchTodo.fulfilled,(state,action)=>{
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchTodo.rejected,(state,action)=>{
            state.error = true
        })
        builder.addCase(postTodo.pending,(state,action)=>{
            state.isLoading = true
        })
        builder.addCase(postTodo.fulfilled,(state,action)=>{
            state.isLoading = false
            state.data =  action.payload
            

        })
        builder.addCase(postTodo.rejected,(state,action)=>{
            state.error = true
        })
    }
})


// export const ListSlice = createSlice({
//         name:'list',
//         initialState,
//         reducers:{
//             getFetch:(state)=>{
//                 state.from = fetchTodo.map(item=>item.from)
//                 state.to = fetchTodo.map(item=>item.to)
//                 state.amount = fetchTodo.map(item=>item.amount)
//             },
//             from:(state,action)=>{
//                 state.from = action.payload
//             },
//             to:(state,action)=>{
//                 state.to = action.payload
//             },
//             amount:(state,action)=>{
//                 state.amount = action.payload
//             }

//         }})
export const {} = ListSlice.actions
export default ListSlice.reducer
