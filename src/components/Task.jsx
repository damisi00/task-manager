// import { useState } from 'react'
import DeleteIcon from "./DeleteIcon"



const Task = ({date, title}) => {
    
  return (
    <>
        <section className="add-modal">
        
            <ul>
                <li>
                    <a  className="task-dets">
                        <h5>{title}</h5>
                        <p>{date}</p>
                    </a>
                    <DeleteIcon />
                    {/* <DeleteIcon onClick={() => deleteList()} /> */}
                </li>
            
            </ul>
        </section>
      
    </>
  )
}

export default Task