// import styles from './Todo.module.scss'
import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import styles from './Todo.module.scss'


export default function Todo({ todo, buttonAction, buttonText }){
return (
    <Card>
      

        <span>{todo.title} <button className={styles.button} onClick={() => buttonAction(todo._id) }>{buttonText}</button></span>


    </Card>
  );
}