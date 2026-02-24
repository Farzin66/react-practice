import React, { useState } from "react";
import { useTransition, useOptimistic } from "react";

function fakeServerAddTodo(text) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error("Server failed"));
        return;
      }
      resolve({ id: Math.random().toString(36).slice(2), text });
    }, 1000);
  });
}

const TodoList = () => {
  const [input, setInput] = useState ('');
  const [task, setTask] = useState ([]);
  const [optimisticState, setOptimistic] = useOptimistic(task);

  function handleClick (e){
    setTask ([...task], input)
  }

  return (
    <>
      <div>
        <h2>Optimistic todo list</h2>
        <input type="text" placeholder="Write a todo..."
        onChange={(e) => setInput(e.target.value)} />
        <br />
        <button onClick={handleClick}>Add</button>
        <br />
        <ul>
            {task.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
