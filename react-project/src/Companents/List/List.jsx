import React, { useEffect, useState } from 'react'
import './List.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, edit, fetchTodo, putTodo } from '../../State/Slice/List/ListSlice'
import { changed } from '../../State/Slice/Display/Display'
export const List = () => {
    const data = useSelector((state)=>state.list)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchTodo())
    },[])
    // console.log(data.data)
    const deleteClick=(id)=>{
        
        dispatch(deleteTodo(id))
        dispatch(fetchTodo())
    }
    const editButton = (id,values)=>{
      dispatch(changed())
  
      dispatch(edit(id))
    }
  return (
    <div className='divlist-container'>

      {data.isLoading?<h1>Loading...</h1>:data.data.map(item=>
       { return (
        
          <div key={item.id} className='list-div'>
          <p >{item.from}</p>
         <p >{item.to}</p>
         <p >{item.amount}</p>
         <div key={item.id} className="div-button">
             <button onClick={()=>editButton(item.id,item)} type='button'>!</button>
             <button onClick={()=>deleteClick(item.id)}type='button'>x</button>
         </div>
        </div>
        )}
      )}
        
          
      
        
    </div>
  )
}
