import React, { useEffect } from 'react'
import './List.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodo } from '../../State/Slice/List/ListSlice'
export const List = () => {
    const data = useSelector(state=>state.list)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchTodo())
    },[])
    console.log(data.data)

  return (
    <div className='divlist-container'>
      {data.isLoading?<h1>Loading...</h1>:data.data.map(item=>
       { return (
          <div className='list-div'>
          <p>{item.from}</p>
         <p>{item.to}</p>
         <p>{item.amount}</p>
         <div className="div-button">
             <button type='button'>!</button>
             <button type='button'>x</button>
         </div>
        </div>
        )}
      )}
        
          
      
        
    </div>
  )
}
