
type taskProps = {
    task: string
    deleteTask: () => void
}

const Task = ({task, deleteTask}:taskProps) => {


    return(
        <div className="task">
            <span>{task}</span>
            <button onClick={deleteTask}>Delete</button>
        </div>
    )
}

export default Task;