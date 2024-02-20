import { TaskShow } from "../TaskShow"
import "./styles.css";


export const TaskList = ({ tasks, onDelete, onUpdate }) => {

    return (
        <div className="task-contents">
            {tasks.map((task)=>{
                return(
                    <TaskShow key={task.id} task={task} onDelete={onDelete} onUpdate={onUpdate} />
                )
            })}
        </div>
    )
}