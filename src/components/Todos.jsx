import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Todos</h2>
      {todos.map((item) => (
        <div key={item.id} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h4>{item.text}</h4>
          <button onClick={() => dispatch(removeTodo(item.id))}>X</button>
        </div>
      ))}
    </div>
  );
}

export default Todos;
