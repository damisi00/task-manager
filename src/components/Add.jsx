import { useState } from "react";
import Task from './Task'

const Add = () => {

    const [addTask, setAddTask] = useState(false)
    const [name, setName] = useState('')
    const [date, setDate] = useState('')


    const handleSubmit = e => {
        e.preventDefault();
        setAddTask(true);
        setName(e.target.value);
        setDate(e.target.value);
        setTimeout(() => {
            setAddTask(false);
        }, 3500)
    }
  return (
    <>
        {addTask && <h3 style={{textAlign: 'center'}}>You've added a task successfully 😉👊</h3>}

        <form className="add-modal" onSubmit={handleSubmit}>
            <h4>Add Task</h4>
            <div className="input-wrap">
                <label htmlFor="task-name">
                    Task Name
                </label>
                <input type="text" id="task-name" required/>
            </div>

            <div className="input-wrap">
                <label htmlFor="date">
                    Due date
                </label>
                <input type="date" id="date" min="2023-09-03" required/>
            </div>
            <button type="submit"  className="add_btn">Add</button>
        </form>

        <Task title={name} date={date}/>

    </>
  )
}

export default Add