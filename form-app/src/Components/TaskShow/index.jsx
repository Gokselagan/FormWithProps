import { useState } from "react";
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

const taskbox = "flex flex-col  border-solid border-2 border-lime-500 rounded-3xl p-5 w-80 text-center";

const deleteBtn = "py-2.5 px-5 text-sm border-none rounded-3xl bg-red-600 text-white cursor-pointer font-semibold";

const editBtn = "py-2.5 px-5 text-sm cursor-pointer border-none rounded-3xl bg-blue-600 text-white font-semibold";

    return (
        <div className={taskbox}>

            {showEdit ? <TaskCreate task={task}  editTaskForm={true} updatedTask={handleUpdate} /> :
                <>
                    <h3>Your Duty</h3>
                    <p>{task.title}</p>
                    <h3>Jobs</h3>
                    <p>{task.taskDesc}</p>
                    <div className="flex flex-row justify-between">
                        <button className={deleteBtn} onClick={handleDelete}>Clear</button>
                        <button className={editBtn} onClick={handleEditBtn}>Update</button>
                    </div></>
            }

        </div>
    )
}