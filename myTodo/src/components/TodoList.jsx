import styles from "./TodoList.module.css"
import TodoItems from "./TodoItems"

export default function TodoList({todos,settodos}){
 
const sortedTodos= todos.slice().sort((a,b)=> Number(a.done)-Number(b.done))

    return <div className={styles.list}>


        {sortedTodos.map((item)=> ( <TodoItems key={item.name} item={item} todos={todos} settodos={settodos}/> ))}

    </div>
}