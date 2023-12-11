import React from 'react'
import { MdDelete } from "react-icons/md";


function Todolist(props) {
  return (
    <li className="list-item">
        {props.item}
        <span className='icons'>
        

        <i  
        onClick={e=>{
            props.deleteItem(props.index)
        }}><MdDelete className='icon-delete' /></i>

        </span>
    </li>
  )
}

export default Todolist