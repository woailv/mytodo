import React from "react";
import Todo from "./Todo";
import {ping, toggleTodo} from "../actions";

const TodoList = ({todos, toggleTodo}) => {
    return (<ul>
        {todos.map(todo =>
            <Todo text={todo.text} completed={todo.completed} onClick={() => {toggleTodo(todo.id)}}/>
        )}
    </ul>)
}

export default TodoList