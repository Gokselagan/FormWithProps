import { useState } from 'react';
import { TaskCreate } from './Components/TaskCreate';
import { TaskList } from './Components/TaskList';



export const App = () => {

  const [tasks, setTasks] = useState([]);


  const createTask = (title, taskDesc) => {


    const createdTaskArray = [
      ...tasks,
      {
        id: Math.round(Math.random() * 99999),
        title: title,
        taskDesc: taskDesc
      }
    ]
    setTasks(createdTaskArray);

  }

  const onDelete = (id) => {
    console.log("silinen id: ", id);

    const deletedTasks = tasks.filter((task) => (task.id !== id))
    setTasks(deletedTasks);

  }

  const editTask = (id, updatedTitle, updatedTaskDesc) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id: id, title: updatedTitle, taskDesc: updatedTaskDesc }
      }
      return task;
    })
    setTasks(updatedTasks);
  }

  return (
    <div className="flex flex-col items-center font-sans">
      <TaskCreate onCreate={createTask} />
      <h1>Duties</h1>
      <TaskList tasks={tasks} onDelete={onDelete} onUpdate={editTask} />
    </div>
  );
}


