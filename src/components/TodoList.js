import React from 'react';

const TodoList = ({todos, onToggle}) => {
    return (
        <ul>
            {todos.map(todo=><li key={todo.id} 
            onClick={()=> onToggle(todo.id)} style={{textDecoration: todo.done ? 'line-through': 'none'}}>
                {todo.text}</li>)}    
        </ul>
    );
};

export default TodoList;