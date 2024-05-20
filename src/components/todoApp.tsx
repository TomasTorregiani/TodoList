import { useState } from "react";
import TaskList from "./taskList";


const TodoApp = () => {

    const [newTask, setNewTask] = useState<string>("")
    const [taskList, setTaskList] = useState<string[]>([])

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value)        
    }

    const handleAddTask = () => {
        if(newTask.trim() === "") return
        setTaskList(tareasAnteriores => [...tareasAnteriores, newTask])
        setNewTask("")
    }   

    const handleDeleteTask = (index:number) => {
        setTaskList(tareas => tareas.filter((_, i) => i !== index))
    }

    return(
        <div>
            <h1>Lista de tareas</h1>
            <div>
                <input 
                type="text"
                value={newTask}
                onChange={handleChange} 
                placeholder="Nueva Tarea"
                />
                <button className="task" onClick={handleAddTask}>Send</button>
            </div>
            <TaskList taskList={taskList} deleteTask={handleDeleteTask} />
        </div>
    )
}

export default TodoApp;