import { useState } from "react"

import TodoList from "./TodoList"
import Form from "./Form"
import Footer from "./Footer"

export default function Todo() {

    const [todos, settodos] = useState([]);
    const completedTodos = todos.filter((todo)=> todo.done).length;
    const totalTodos  = todos.length;


    return <div>
        <Form settodos={settodos} todos={todos} />
        <TodoList todos={todos} settodos={settodos}   />
        <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
}