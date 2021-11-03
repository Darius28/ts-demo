import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodoModel from "./models/todo";

function App() {
  const [todos, setTodos] = useState<TodoModel[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new TodoModel(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id !== todoId);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos onDelete={removeTodoHandler} items={todos} />
    </div>
  );
}

export default App;
