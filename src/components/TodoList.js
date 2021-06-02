import React from "react";

import Todo from "./Todo";
import { useSelector } from "react-redux";
const TodoList = () => {
  const list = useSelector((state) => state.todos);
  return (
    <div>
      {console.log(list)}
      <div>
        <h2>Todo List</h2>
      </div>
      {
        list.map(el=> <Todo key={el.id}  el={el} /> )
      }
    </div>
  );
};

export default TodoList;
