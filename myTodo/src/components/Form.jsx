import styles from "./Todo.module.css"
import { useState } from "react"

export default function ({ settodos , todos }){

    const [todo, settodo] = useState({name : "" , done : false});

 function handleSubmit(e) {
        e.preventDefault()

        settodos([...todos, todo])

        settodo({name : "" , done : todo.done})
    
    }

    return <div>
         <form onSubmit={handleSubmit} className={styles.todoform} >
            <div className={styles.inputContainer}>
                <input className={styles.modernInput} type="text" value={todo.name} onChange={(e) => settodo({name : e.target.value , done : todo.done})} placeholder="Enter Task Here..." />
                <button className={styles.modernButton}>Add</button>
              
            </div>

            
        </form>
     
    </div>
}