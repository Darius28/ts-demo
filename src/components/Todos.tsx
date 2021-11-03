import React from "react";
import TodoModel from "../models/todo";
import Todo from "./Todo";

const Todos: React.FC<{
  items: TodoModel[];
  onDelete: (todoId: string) => void;
}> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <Todo
          onDelete={props.onDelete.bind(null, item.id)}
          key={item.id}
          text={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;
