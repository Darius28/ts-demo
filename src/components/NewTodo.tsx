import React, { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";


const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext)

  const textInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;

    if (enteredText!.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={textInputRef} />
      <button>Add Text</button>
    </form>
  );
};

export default NewTodo;
