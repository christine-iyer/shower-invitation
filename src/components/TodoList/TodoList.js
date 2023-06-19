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
            <h2>RSVP here...</h2>
            <h3>Add your name and touch enter. If you can't attend, click the X button that appears next to your entry.   </h3><input className={styles.input} type="text" 
            value={newTodo.title} 
            onChange={(e) => {
                setNewTodo({...newTodo, title: e.target.value})
            }} 
            onKeyDown={(e) => {
               
                e.key === 'Enter' && createTodo()
            }}
            />
             <h3>We look forward to seeing you</h3>
             <ListGroup className={styles.list}>
        {todos.map(todo => (
            <Todo 
                key={todo._id} 
                
                todo={todo}
                buttonAction={moveToCompleted}
                buttonText={'X'}
            />
        ))}
                _________________________________________________________

        </ListGroup>
        <span><h4>Sorry you can't be there. (If your plans change, delete your name from this list and sign up again.) </h4></span>
        
        {completedTodos.map(todo =>(
            <Todo
                key={todo._id}
                todo={todo}
                buttonAction={deleteTodo}
                buttonText={'Delete and Start Over'}
                
            />
        ))}
                _________________________________________________________


        </div>
    )
}