import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoComplete } from "../store/todoSlice";

export const TodoItem = ({ id, text, isCOmpleted }) => {
  const dispatch = useDispatch();
  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={isCOmpleted}
        onChange={() => dispatch(toggleTodoComplete({ id }))}
      />
      <span>{text}</span>
      <span className="delete" onClick={() => dispatch(removeTodo({ id }))}>
        &times;
      </span>
    </li>
  );
};
