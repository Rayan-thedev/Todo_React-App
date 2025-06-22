import styles from "./Footer.module.css"

export default function Footer({completedTodos , totalTodos}){
    return <div className={styles.footer}> 
    <span className={styles.item}>{completedTodos} / {totalTodos}</span>
    </div>
}