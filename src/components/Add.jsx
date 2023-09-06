import { useState } from "react";
import DeleteIcon from "./DeleteIcon"

const Add = () => {

    const [submit, setSubmit] = useState(false)  
    const [formData, setFormData] = useState({name: '', date: ''});
    const [task, setTask] = useState([])
    
    
    const handleChange = e =>{
        const { name, value}  = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    }

    let {name, date} = formData;
    // Removing any item  from the list 
    const deleteList = (i) => {
        let total = [...task];
        total.splice(i,1);
        setTask(total);
    }


    const handleSubmit = e => {
        e.preventDefault();
        setSubmit(true);
        setTask([...task, {name, date}]);
        setTimeout(() => {
            setSubmit(false);
            
        }, 3500)
    }
  return (
    <>
       {/* pops up when the form is submitted  */}
        {submit && <h3 style={{textAlign: 'center'}}>You've added a task successfully 😉👊</h3>}

        <form className="add-modal" onSubmit={handleSubmit}>
            <h4>Add Task</h4>
            <div className="input-wrap">
                <label htmlFor="task-name">
                    Task Name
                </label>
                <input type="text" id="task-name" name="name"  value={formData.name} onChange={handleChange} required/>
            </div>

            <div className="input-wrap">
                <label htmlFor="date">
                    Due date
                </label>
                <input type="date" id="date" min="2023-09-03" name="date" value={formData.date} onChange={handleChange} required/>
            </div>
            <button type="submit"  className="add_btn">Add</button>

        </form>

        <section className="add-modal">
            <h4>Task List</h4>

            {/* Implementing the list */}
            <ul >
                {task && task.map((item, i) =>{
                     return (
                        <li key={i} >
                        
                            <a  className="task-dets">
                                <h5>{item.name}</h5>
                                <p>{item.date}</p>
                            </a>
                            
                            <DeleteIcon i={item.i} deleteList={deleteList} />
                        </li>
                        )
                })}

            </ul>
        </section>
    </>
  )
}

export default Add