// import styles from './Todo.module.scss'
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Todo({ todo, buttonAction, buttonText }){
return (
    <Card>
      

        <span>{todo.title} <Button variant="secondary" onClick={() => buttonAction(todo._id) }>{buttonText}</Button></span>


    </Card>
  );
}