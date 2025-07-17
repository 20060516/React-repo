import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TaskView = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/employees/${id}`)
      .then((res) => res.json())
      .then((data) => setEmployee(data))
      .catch((err) => console.error('Error fetching employee:', err));

    fetch(`http://localhost:8080/api/tasks/employee/${id}`)
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error('Error fetching tasks:', err));
  }, [id]);

  return (
    <div className="task-container">
      {employee ? (
        <div className="employee-info">
          <h2>{employee.name}</h2>
          <p className="role">{employee.role}</p>
        </div>
      ) : (
        <p>Loading employee info...</p>
      )}

      <h3>Assigned Tasks</h3>
      {tasks.length === 0 ? (
        <p>No tasks assigned.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.taskId} className="task-item">
              <strong>{task.title}</strong> — {task.description} ({task.status})
            </li>
          ))}
        </ul>
      )}

      <style>{`
        .task-container {
          max-width: 800px;
          margin: 2rem auto;
          padding: 1.5rem;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          font-family: Arial, sans-serif;
        }
        .employee-info {
          margin-bottom: 20px;
          border-bottom: 1px solid #ccc;
          padding-bottom: 10px;
        }
        h2 {
          color: #2c3e50;
          margin-bottom: 0;
        }
        .role {
          font-size: 1rem;
          color: #666;
          margin-top: 4px;
        }
        h3 {
          margin-top: 30px;
          color: #333;
        }
        .task-list {
          list-style: none;
          padding: 0;
        }
        .task-item {
          background: #f4f4f4;
          padding: 12px;
          margin-bottom: 10px;
          border-radius: 6px;
        }
      `}</style>
    </div>
  );
};

export default TaskView;
