import { useForm } from "react-hook-form";
import "./styles.css";

export const TaskCreate = ({ onCreate, task, editTaskForm, updatedTask }) => {


    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = (data) => {

        let title = data.title;
        let taskDesc = data.addTask;
       
        if(editTaskForm){
            updatedTask(task.id, title, taskDesc)
        }else{
            onCreate(title, taskDesc)
        }
        reset()
    }



    return (

        <>
            {editTaskForm
                ?
                <div className="edit-task">
                    <h3>Please Update Task</h3>
                    <form className="task-form" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="title" className="task-label">Update Title</label>
                        <input {...register("title")} id="title" className="task-content" defaultValue={task ? task.title : ""} />

                        <label htmlFor="addTask" className="task-label">Update Task</label>
                        <textarea {...register("addTask")} id="addTask" className="task-content" rows={5} defaultValue={task ? task.taskDesc : ""} />

                        <button type="submit" className="createTask-btn editTask-btn">Edit</button>
                    </form>
                </div>
                :

                <div className="create-task">
                    <h3>Please Add Task</h3>
                    <form className="task-form" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="title" className="task-label">Title</label>
                        <input {...register("title")} id="title" className="task-content" />

                        <label htmlFor="addTask" className="task-label">Add Task</label>
                        <textarea {...register("addTask")} id="addTask" className="task-content" rows={5} />

                        <button type="submit" className="createTask-btn">Create</button>
                    </form>
                </div>}
        </>


    )
}