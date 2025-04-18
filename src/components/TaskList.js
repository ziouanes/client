import React, { useEffect, useState } from 'react';
import { taskService } from '../services/api';
import styles from './TaskList.module.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const data = await taskService.getAllTasks();
      setTasks(data);
    } catch (err) {
      console.error('Erreur de chargement:', err);
    }
  };

  const toggleComplete = async (task) => {
    try {
      const updated = await taskService.updateTask(task.id, {
        ...task,
        completed: !task.completed
      });
      setTasks(tasks.map(t => (t.id === updated.id ? updated : t)));
    } catch (err) {
      console.error('Erreur:', err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await taskService.deleteTask(id);
      setTasks(tasks.filter(t => t.id !== id));
    } catch (err) {
      console.error('Erreur:', err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Liste des tâches</h2>
      <ul className={styles.taskList}>
        {tasks.map(task => (
          <li key={task.id} className={styles.taskItem}>
            <span
              onClick={() => toggleComplete(task)}
              className={styles.taskTitle}
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.title}
            </span>
            <button 
              className={styles.deleteButton}
              onClick={() => deleteTask(task.id)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
