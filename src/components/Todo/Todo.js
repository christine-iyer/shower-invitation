// import styles from './Todo.module.scss'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Todo({ todo, buttonAction, buttonText }){
    // return(
    //        <div className={styles.todo}>{todo.title} 
    //                 <button className={styles.button} onClick={() => buttonAction(todo._id) }>{buttonText}</button>
    //         </div>
    // )


return (
    <Card>

      <Card.Body>
        <Card.Title>{todo.name}</Card.Title>
        <Card.Text>
          RSVP here
        </Card.Text>
        <Button variant="primary" onClick={() => buttonAction(todo._id) }>{buttonText}</Button>
      </Card.Body>
    </Card>
  );
}