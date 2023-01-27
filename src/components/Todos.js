import React, { useState } from 'react';
import TodoList from './TodoList';

const Todos = ({onCreate, todos, onToggle}) => {
    const [text, setText] = useState('');
    const onChange = (e) => setText(e.target.value);
    const onClick = () => {
        onCreate(text);
        setText('');
    }
    return (
        <div>
            <div>
                <input value={text}
                onChange={onChange}></input>
                <button onClick={onClick}>등록</button>
            </div>
            <TodoList todos={todos} onToggle={onToggle}/>
        </div>
    );
};

export default Todos;