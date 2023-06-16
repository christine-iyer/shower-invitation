import Todo from '../Todo/Todo'
import styles from './TodoList.module.scss'
import { ListGroup } from 'react-bootstrap'

export default function TodoList ({ 
    newTodo, 
    createTodo, 
    setNewTodo, 
    todos,
    completedTodos,
    moveToCompleted,
    deleteTodo
}){
    return(
        <div className={styles.todolist}>
            Your Name? <input className={styles.input} type="text" 
            value={newTodo.title} 
            onChange={(e) => {
                setNewTodo({...newTodo, title: e.target.value})
            }} 
            onKeyDown={(e) => {
                e.key === 'Enter' && createTodo()
            }}
            />
             <h3>We look forward to seeing you</h3>
             <ListGroup>
        {todos.map(todo => (
            <Todo 
                key={todo._id} 
                todo={todo}
                buttonAction={moveToCompleted}
                buttonText={'I will have to miss'}
            />
        ))}</ListGroup>
        <span><h3>Sorry you can't be there</h3><h6>(If your plans change, delete your name from this list and sign up again.) </h6></span>
        
        {completedTodos.map(todo =>(
            <Todo
                key={todo._id}
                todo={todo}
                buttonAction={deleteTodo}
                buttonText={'Delete and Start Over'}
                
            />
        ))}
        </div>
    )
}