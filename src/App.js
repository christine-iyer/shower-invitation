import './App.css';
import { useState, useEffect } from 'react'
import TodoList from './components/TodoList/TodoList'
import ListGroup from 'react-bootstrap/ListGroup'
import shower from './newShow.png'
import Image from './components/Image/Image'
import Content from './components/Content/Content'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function App() {

    const [todos, setTodos] = useState([])
    const [completedTodos, setCompletedTodos] = useState([])
    const [newTodo, setNewTodo] = useState({
        title: '',
        completed: false
    })

    //createTodos
    const createTodo = async () => {
        const body = { ...newTodo }
        try {
            const response = await fetch('/api/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            const createdTodo = await response.json()
            const todosCopy = [createdTodo, ...todos]
            setTodos(todosCopy)
            setNewTodo({
                title: '',
                completed: false
            })
        } catch (error) {
            console.error(error)
        }
    }
    //deleteTodos
    const deleteTodo = async (id) => {
        try {
            const index = completedTodos.findIndex((todo) => todo._id === id)
            const completedTodosCopy = [...completedTodos]
            const response = await fetch(`/api/todos/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            await response.json()
            completedTodosCopy.splice(index, 1)
            setCompletedTodos(completedTodosCopy)
        } catch (error) {
            console.error(error)
        }
    }
    //moveToCompleted
    const moveToCompleted = async (id) => {
        try {
            const index = todos.findIndex((todo) => todo._id === id)
            const todosCopy = [...todos]
            const subject = todosCopy[index]
            subject.completed = true
            const response = await fetch(`/api/todos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(subject)
            })
            const updatedTodo = await response.json()
            const completedTDsCopy = [updatedTodo, ...completedTodos]
            setCompletedTodos(completedTDsCopy)
            todosCopy.splice(index, 1)
            setTodos(todosCopy)
        } catch (error) {
            console.error(error)
        }
    }
    //getTodos
    const getTodos = async () => {
        try {
            const response = await fetch('/api/todos')
            const foundTodos = await response.json()
            setTodos(foundTodos.reverse())
            const responseTwo = await fetch('/api/todos/completed')
            const foundCompletedTodos = await responseTwo.json()
            setCompletedTodos(foundCompletedTodos.reverse())
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getTodos()
    }, [])
    return (
        <>
            <Header ></Header>

            <div className="container" style={{width: '90%',  
     alignItems: 'center'}} >
                <div className='flex-child one' style={{ maxWidth: '100%', objectFit: 'contain' }}>
                     <div className='five'> 
                         <div className='two'> 
                             <div className='six'> 
                                <div className='three'>
                                     <div className='seven'> 
                                         <div className='four'> 
                                             <div className='eight'> 
                                                <img className='shower' style={{ width: '99%' }} src={shower} alt="fireSpot" />
                                             </div> 
                                         </div> 
                                     </div>
                                </div> 
                             </div> 
                         </div> 
                    </div>
                </div>

                {/* <div className='flex-child oneTwo' style={{ float: 'right', width: '100%', objectFit: 'contain' }}>
                    <div className='five'>
                        <div className='two'>
                            <div className='six'>
                                <div className='three'>
                                    <div className='seven'>
                                        <div className='four'>
                                            <div className='eight'>
                                                <img className='kai' style={{ width: '100%', objectFit: 'contain' }} src={kai} alt="fireSpot" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <hr></hr>
                {/* <Image></Image> */}
            </div>
            <div style={{width:'100%', alignContent:'center', alignItems:'center'}}>

<h4>When:</h4><p>Sunday, July, 23, 2023 1:00pm</p>
<h4>Where:</h4>
<address>
  <p>Mary Hennessey Iyer's Home <br></br>
    <a href="hjfdh">76 North St. (entrance, driveway, and street parking on Scammon St.)</a> <br></br>
    <a href="hjvfffh">Saco, ME 04072 </a> <br></br>
  </p>
</address>
<h4>Registry:</h4>
<a href="https://www.babylist.com/list/baby-edith-iyer-hernandez">For those of you who have asked, here's is a link to a baby registry.</a>
  


</div>
            {/* <Content className="flex-child content" /> */}

            <ListGroup>
                <TodoList
                    newTodo={newTodo}
                    setNewTodo={setNewTodo}
                    createTodo={createTodo}
                    todos={todos}
                    moveToCompleted={moveToCompleted}
                    completedTodos={completedTodos}
                    deleteTodo={deleteTodo}
                />
            </ListGroup>
            <Footer style={{height: '5vh'}}/>
        </>
    )
}