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
    id:'',
    change:false,
    error:false,
    
}
export const fetchTodo  = createAsyncThunk('fetchTodo',async()=>{
    const data = await fetch('https://acb-api.algoritmika.org/api/transaction')
    console.log(data,'data')

    return data.json()
})

export const postTodo= createAsyncThunk('postTodo',async(values)=>{
    console.log(values)
   const data= await fetch('https://acb-api.algoritmika.org/api/transaction', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body:JSON.stringify(values)
    
  })
  location.reload()
  })
export const deleteTodo = createAsyncThunk('deleteTodo',async(id)=>{
    fetch(`https://acb-api.algoritmika.org/api/transaction/${id}`, {
  method: 'DELETE'
})
window.location.reload()
})
export const putTodo= createAsyncThunk('postTodo',async([id,values])=>{
    console.log(values,'PUT')
   const data= await fetch(`https://acb-api.algoritmika.org/api/transaction/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body:JSON.stringify(values)
    
  })
  window.location.reload()
  })
// export const editTodo = createAsyncThunk('editTodo',async(id)=>{
//     fetch(`https://acb-api.algoritmika.org/api/transaction/${id}`, {
//         method: 'PUT'
//       })
// })
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
        edit:(state,action)=>{
            state.change = true,
            state.id = action.payload
        }
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
            state.data =  [],
            state.isSuccess = action.payload
            

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
export const {edit} = ListSlice.actions
export default ListSlice.reducer
