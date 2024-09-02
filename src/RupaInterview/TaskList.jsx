import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1' },
    { id: 2, title: 'Task 2' },
    { id: 3, title: 'Task 3' },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleAddTask = () => {
    if (newTaskTitle.trim() === '') return;
    const newTask = {
      id: tasks.length + 1,
      title: newTaskTitle,
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    if (editingTaskId === taskId) setEditingTaskId(null);
  };

  const handleEditTask = (taskId, newTitle) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, title: newTitle } : task
    );
    setTasks(updatedTasks);
    setEditingTaskId(null);
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {editingTaskId === task.id ? (
              <input
                type="text"
                value={task.title}
                onChange={(e) => handleEditTask(task.id, e.target.value)}
              />
            ) : (
              <div>
                {task.title}
                <button onClick={() => setEditingTaskId(task.id)}>Edit</button>
                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Enter task..."
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
};

export default TaskList;
