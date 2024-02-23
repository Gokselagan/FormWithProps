Task Manager

The Task Manager application allows users to create, edit, and delete tasks. Users can add new tasks with titles and descriptions, update existing tasks, and remove tasks from the list. The application provides a simple and intuitive interface for managing daily duties and responsibilities.


Features

Create new tasks with titles and descriptions.
Edit existing tasks by updating titles and descriptions.
Delete tasks from the list.
User-friendly interface with clear task display and buttons for actions.


Technologies Used

React
React Hooks (useState)
React Hook Form
HTML
CSS
JavaScript


Components

App.js
The main component that holds the state of tasks, manages task creation, deletion, and updating, and renders the TaskCreate and TaskList components.

TaskCreate.js
Component for creating new tasks. It includes a form where users can input task titles and descriptions. Users can create a new task by clicking the "Create" button. If editing an existing task, the form is pre-filled with the task's current details, and the "Edit" button allows for updating the task.

TaskList.js
Component for displaying a list of tasks. It maps through the tasks array and renders each task using the TaskShow component.

TaskShow.js
Component for displaying individual tasks. It includes the task's title and description along with buttons to delete the task or edit it. When the "Update" button is clicked, it toggles to show the TaskCreate component for editing.


How to Use

Open the application in a browser.

To create a new task:

Enter a title and description in the input fields.
Click the "Create" button to add the task to the list.

To edit a task:
Click the "Update" button on the task you want to edit.

Modify the title or description in the form fields.
Click the "Edit" button to save the changes.

To delete a task:
Click the "Clear" button on the task you want to delete.


Additional Notes

Tasks are stored in the tasks state array in App.js.
Each task has a unique ID generated randomly for identification.
The TaskCreate component handles both task creation and editing based on the editTaskForm prop.
The TaskShow component displays individual tasks and toggles between display and edit modes.


Available Scripts

App.js: The main component managing state and rendering TaskCreate and TaskList.
TaskCreate.js: Component for creating new tasks with a form.
TaskList.js: Component for displaying a list of tasks.
TaskShow.js: Component for displaying individual tasks with edit and delete options.
styles.css: Contains styles for the application layout and components.
script.js: Handles user interactions, such as creating, editing, and deleting tasks.
Usage
The Task Manager application is designed for organizing daily tasks and duties. Users can easily add, edit, and remove tasks, making it a convenient tool for managing personal or work-related responsibilities.


Enjoy organizing your tasks with the Task Manager application!
