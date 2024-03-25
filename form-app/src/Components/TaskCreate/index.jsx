import { useForm } from "react-hook-form";


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

        if (editTaskForm) {
            updatedTask(task.id, title, taskDesc)
        } else {
            onCreate(title, taskDesc)
        }
        reset()
    }

    const createBtn = "border-solid border-2 rounded-lg border-lime-500 p-2.5 my-2.5 mx-0 text-xl text-white cursor-pointer bg-lime-600";

    const editBtn = "border-solid border-2 rounded-lg p-2.5 my-2.5 mx-0 text-xl text-white cursor-pointer  border-fuchsia-700 bg-fuchsia-700";

    return (
        <>
            {editTaskForm
                ?
                <div className="w-full">
                    <h3>Please Update Task</h3>
                    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="title" className="mx-0 my-2.5">Update Title</label>

                        <input {...register("title")} id="title" className="p-2.5 border-solid border-2 border-slate-400 rounded-lg" defaultValue={task ? task.title : ""} />

                        <label htmlFor="addTask" className="mx-0 my-2.5">Update Task</label>

                        <textarea {...register("addTask")} id="addTask" className="p-2.5 border-solid border-2 border-slate-400 rounded-lg" rows={5} defaultValue={task ? task.taskDesc : ""} />

                        <button type="submit" className={editBtn}>Edit</button>
                    </form>
                </div>
                :

                <div className="w-96">
                    <h3 className="text-center bg-sky-400 py-2.5 rounded-xl text-xl">Please Add Task</h3>
                    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="title" className="mx-0 my-2.5">Title</label>
                        <input {...register("title")} id="title" className="p-2.5 border-solid border-2 border-slate-400 rounded-lg" />

                        <label htmlFor="addTask" className="mx-0 my-2.5">Add Task</label>
                        <textarea {...register("addTask")} id="addTask" className="p-2.5 border-solid border-2 border-slate-400 rounded-lg" rows={5} />

                        <button type="submit" className={createBtn}>Create</button>
                    </form>
                </div>}
        </>


    )
}