// An input field to add new todos.

import { useState,useContext } from "react";
import {TodosContext} from "../context/TodosContext"

function TodoInput() {
    const [text, setText] = useState('')
    const context = useContext(TodosContext)

    // context is some value you got from useContext(...)
    // if context does not exist, return don't render anything at all
    if (!context) return null;

    const handleSubmit = (e:React.FormEvent) =>{
        // keep your state + data.
        e.preventDefault()
        // if you type nothing → it does NOT add a todo
        if (text.trim()) {
            // It updates your todos list using the previous todos.
            context.addTodo(text)
            // After adding the todo, clear the input.
            setText('')
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
            style={{
                backgroundColor: 'white',
                padding: "5px",
                color: "black"
            }}
            type='text'
            value={text}//from usestate initial value ''
            onChange={(e) => setText(e.target.value)}
            placeholder="what needs to be done?"
               />
               <button 
               style={{
                backgroundColor: '#E0DECA',
                padding: '3px',
                color:'black'
            }}
               type="submit">Add Todo</button> 
        </form>
    )
}

export default TodoInput