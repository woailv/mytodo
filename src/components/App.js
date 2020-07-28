import React from "react";
import AddTodo from "../containers/AddTodo"
import TodoList from "../containers/TodoList";
import Footer from "./Footer";

const App = () => {
    return (
        <div>
            <AddTodo/>
            <TodoList/>
            <Footer/>
        </div>
    )
}

export default App