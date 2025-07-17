// src/components/TaskList.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TaskList = () => {
  const { name } = useParams();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/tasks/${name}`);
        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
        }
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [name]);

  return (
    <div style={{ padding: "20px", fontFamily: "Segoe UI, sans-serif" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
        Tasks for <span style={{ color: "#007bff" }}>{name}</span>
      </h2>

      {tasks.length === 0 ? (
        <p>No tasks found for {name}.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Task</th>
              <th style={tableHeaderStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td style={tableCellStyle}>{task.task}</td>
                <td style={tableCellStyle}>{task.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const tableHeaderStyle = {
  textAlign: "left",
  padding: "12px",
  borderBottom: "2px solid #ccc",
  fontWeight: "bold",
};

const tableCellStyle = {
  padding: "12px",
  borderBottom: "1px solid #eee",
};

export default TaskList;
