import { TaskShow } from "../TaskShow"

export const TaskList = ({ tasks, onDelete, onUpdate }) => {

    return (
        <div className="flex flex-row flex-wrap justify-center gap-12">
            {tasks.map((task)=>{
                return(
                    <TaskShow key={task.id} task={task} onDelete={onDelete} onUpdate={onUpdate} />
                )
            })}
        </div>
    )
}