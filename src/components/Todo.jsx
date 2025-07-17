import { useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, done: false }]);
      setInput("");
    }
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  return (
    <div>
      <h2>ToDo List</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Task" />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((t, i) => (
          <li key={i} style={{ textDecoration: t.done ? "line-through" : "none" }}>
            <input type="checkbox" checked={t.done} onChange={() => toggleTask(i)} />
            {t.text}
            <button onClick={() => deleteTask(i)} style={{ marginLeft: "10px" }}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
