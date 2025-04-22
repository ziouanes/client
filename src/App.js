import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import logo from './assets/logo.jpg'; // Add logo to assets folder
import './App.css';

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="vintage-app">
      <div className="logo-container">
        <img src={logo} alt="UM5 Logo" className="university-logo" />
      </div>
      <div className="content-container">
        <h1 className="vintage-title">📝 Gestionnaire de Tâches</h1>
        <div className="vintage-card">
          <TaskForm onTaskAdded={() => setRefresh(!refresh)} />
          <TaskList key={refresh} />
        </div>
      </div>
    </div>
  );
}

export default App;
