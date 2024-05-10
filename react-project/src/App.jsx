
import './App.css'
import { Form } from './Companents/Form/Form'
import { useDispatch, useSelector, } from 'react-redux'
import { changed } from './State/Slice/Display/Display'
import { List } from './Companents/List/List'
import { useEffect, useState } from 'react'

function App() {

  const dispatch = useDispatch()
//   useEffect(()=>{
//     if(from&&to&&amount){
//       fetch('https://acb-api.algoritmika.org/api/transaction', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body:JSON.stringify({from,to,amount})}
//       ).then(res=>res.json()).then(data=>data)
//     }
//   },[from,to,amount])
//   useEffect(()=>{
//     fetch('https://acb-api.algoritmika.org/api/transaction').then(res=>res.json()).then(data=>setData(data))
//   },[])
// console.log(data.map(item=>item))
  return (
    <>
      <button type='button' onClick={()=>{dispatch(changed())}}>Add</button>
      <Form />
      <List/>
    </>
  )
}

export default App
