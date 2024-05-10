import React, { useEffect, useState } from 'react'
import './Form.css'
import { useDispatch, useSelector } from 'react-redux'
import { postTodo } from '../../State/Slice/List/ListSlice'
export const Form = () => {
    const [todo,setTodo]= useState([])
    const diss = useSelector(state=>state.display.value)
    const dispatch = useDispatch()
   
    const handleChange=(e)=>{
        // console.log(e.target.name,e.target.value)
        setTodo({...todo,[e.target.name]:e.target.value})
    }
    console.log(todo)
    const handleClickF = ()=>{
        console.log('clicked')
        const values = todo.map(item=>item)
        console.log(values)
        useEffect(()=>{
            dispatch(postTodo(values))
        },[])
    }
    // const handleClickF=()=>{
    //     console.log('button clicked')
    //     console.log(todo)
    //     useEffect(()=>{
    //         dispatch(from(todo.form))
    //         dispatch(to(todo.to))
    //         dispatch(amount(todo.amount))
    //     },[])
    // }
  return (
    <form className='form' style={{display:diss}} action="">
         <button className='xbutton' type='button' onClick={()=>dispatch(changedNone())}>x</button>
        <div className="div-modal">
            <h1>Forms</h1>
            <input name='from' type="text"  placeholder='Your Name' onChange={handleChange}/>
            <input name='to' type="text"  placeholder='To Who?' onChange={handleChange}/>
            <input name='amount' type="text"  placeholder='Amount' onChange={handleChange}/>
            <button type='button' onClick={handleClickF}>Add</button>
        </div>
    </form>
  )
}
