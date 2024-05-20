import Task from "./task";

type listTaskProps = {
    taskList:string[]
    deleteTask: (index:number) => void
}


const TodoList = ({taskList, deleteTask}:listTaskProps) => {

    return(
        <div className="taskList">
            {taskList.map((task, i) => {
                return <Task key={i} task={task} deleteTask={() => deleteTask(i)} ></Task>
            })
            }
        </div>
    )
}

export default TodoList;