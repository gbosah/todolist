import React, {useState, useEffect} from 'react'
import css from './test.css'

function Todos({todo, index, completeTodo, removeTodo}){
    return(
        <div className='todo'
        style={{ textDecoration: todo.completed ? "line-through" : "" }}
        >
        {todo.title}
        <button style={{background: 'black'}} onClick={() => removeTodo(index)}>x</button>
        <button onClick={() => completeTodo(index)}>complete</button>
        </div>
    )
}

function Testtodo(){
    const[TodoRemaining, setTodoRemaing]=useState(0);
    const [todos, setTodos]=useState([
        {
            title:"Learning programming",
            completed:false
        }
    ]);
    useEffect(() => {
        setTodoRemaing(todos.filter(todo => !todo.completed).length)
    })
    const addTodo = title => {
        const newTodo = [...todos,{title, completed: false}];
        setTodos(newTodo);
    };
    const removeTodo = index => {
        const newTodo=[...todos]
        newTodo.splice(index, 1);
        setTodos(newTodo);
    }
    const completeTodo = index => {
        const newTodo=[...todos]
        newTodo[index].completed=true;
        setTodos(newTodo);
    }
    return(
        <div className='container'>
        <div className='header'>My ToDo List({TodoRemaining})</div>
        <div className='todos'>
            {todos.map((todo, index) =>(
            <Todos
              key={index}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
              index={index}
              todo={todo} />
        ))}      
        </div>
        <div className='create-todo'>
        <CreateTodo addTodo={addTodo} />
        </div>
        </div>
        
        
    );
}
function CreateTodo({addTodo}) {
    const [value, setValue]=
    useState("");

    const handleSubmit= event => {
        if(!value) return;
        addTodo(value);
        setValue('');
        event.preventDefault();

    }    
        return(
            <form onSubmit={handleSubmit}>
            <input type='text'
            placeholder='Add-To-Do'
            className='input'
            value={value}
            onChange={event => setValue(event.target.value)} />
            </form>

        )
        
    
}

export default Testtodo;