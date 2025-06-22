import styles from "./TodoItems.module.css"

export default function TodoItems({ item, todos, settodos ,  }) {

    function handleDelete() {
        settodos(todos.filter((todo) => todo !== item))
    }

    function handleComplete(name){
        
       settodos(todos.map((todo)=> todo.name===name? {...todo , done :! todo.done} : todo))
       

    }


    const Complete =item.done ? styles.completed :"";
    

    return <div className={styles.item}>

        <div className={styles.itemName}>
           <span  onClick={()=>handleComplete(item.name)} className={Complete}> {item.name}</span>
            <button onClick={handleDelete} className={styles.deleteButton}>x</button>
        </div>
        <hr className={styles.line} />
       
    </div>


}