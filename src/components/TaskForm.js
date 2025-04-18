import React, { useState } from 'react';
import { taskService } from '../services/api';
import styles from './TaskForm.module.css';

const TaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      const newTask = await taskService.createTask({ title });
      setTitle('');
      onTaskAdded(newTask);
    } catch (err) {
      console.error('Erreur:', err);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Nouvelle tâche"
      />
      <button className={styles.button} type="submit">
        Ajouter
      </button>
    </form>
  );
};

export default TaskForm;
