import { useState } from "react";
import "./styles.css";
import { TaskCreate } from "../TaskCreate";

export const TaskShow = ({ task, onDelete, onUpdate }) => {

    const [showEdit, setShowEdit] = useState(false);

    const handleDelete = () => {
        onDelete(task.id)
    }

    const handleEditBtn = (id, title, taskDesc) => {
        setShowEdit(true);
        onUpdate(id, title, taskDesc);
    }

const handleUpdate = (id, updatedTitle, updatedTaskDesc) =>{
    setShowEdit(false);
    onUpdate(id, updatedTitle, updatedTaskDesc);
}

    return (
        <div className="task-box">

            {showEdit ? <TaskCreate task={task}  editTaskForm={true} updatedTask={handleUpdate} /> :
                <>
                    <h3>Your Duty</h3>
                    <p>{task.title}</p>
                    <h3>Jobs</h3>
                    <p>{task.taskDesc}</p>
                    <div className="btn-wrapper">
                        <button className="task-deleteBtn" onClick={handleDelete}>Clear</button>
                        <button className="task-editBtn" onClick={handleEditBtn}>Update</button>
                    </div></>
            }

        </div>
    )
}