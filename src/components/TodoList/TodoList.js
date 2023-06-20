import Todo from '../Todo/Todo'
import styles from './TodoList.module.scss'
import { ListGroup } from 'react-bootstrap'

export default function TodoList({
    newTodo,
    createTodo,
    setNewTodo,
    todos,
    completedTodos,
    moveToCompleted,
    deleteTodo
}) {
    return (
        <div className={styles.todolist} >
            <h3>RSVP here...</h3>

         
            <input className={styles.input} type="text"
                value={newTodo.title}
                onChange={(e) => {
                    setNewTodo({ ...newTodo, title: e.target.value })
                }}
                onKeyDown={(e) => {

                    e.key === 'Enter' && createTodo()
                }}
            />
                        <ul>
                <li>Add your name and touch enter. If you can't attend, click the X button that appears next to your entry.</li>
                <li>If you would like to chat with hosts directly, our contact information can be found below.</li>
                <li>And finally, if you want to leave a message here, just start typing.</li>
                <li>We'll be serving light lunch. </li>
            </ul>

            
          
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
            <span><h4>Sorry you can't be there. (If your plans change, delete your name and sign up again.) </h4></span>

            {completedTodos.map(todo => (
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