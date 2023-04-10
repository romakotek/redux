import { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { InputField } from "./components/InputField";
import { TodoList } from "./components/TodoList";
import { addTodo } from "./store/todoSlice";

function App() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const addTask = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  const toggleTodoComplete = (todoId) => {
    // todos.map((todo) => {
    //   if (todo.id !== todoId) return;
    //   return {
    //     ...todo,
    //     isCompleted: !todo.isCompleted,
    //   };
    // });
  };

  return (
    <div className="App">
      <InputField text={text} handleSubmit={addTask} setText={setText} />
      <TodoList />
    </div>
  );
}

export default App;
