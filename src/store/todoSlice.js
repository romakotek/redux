import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString,
        text: action.payload.text,
        isCompleted: false,
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodoComplete(state, action) {
      const toggledTodo7 = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggledTodo7.isCompleted = !toggledTodo7.isCompleted;
    },
  },
});

export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;
export default todoSlice.reducer;
