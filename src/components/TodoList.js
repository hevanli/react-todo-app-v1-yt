import React, {useState} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function IsAllWhitespace(str) {
    var whitespaces = { ' ' : true, '\n': true, '\t': true, '\r': true, '\b' : true }
    for(var i = 0; i < str.length; i++) {
        // with a switch
        switch(str[i]) {
            case ' ': case '\n': case '\t': case '\r': case '\b': break;
            default: return false;
        }

    }
    return true;
}

function IsEmptyStr(str) {
    return !str || IsAllWhitespace(str);
    // return !str || /^\s*$/.test(str);
}

function TodoList() {
    const[todos,setTodos] = useState([]);

    const addTodo = todo => {
        if(IsEmptyStr(todo.text)) return;
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    };

    const updateTodo = (todoId, newValue) => {
        if(IsEmptyStr(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    }

    

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h1>ayoski what's poppin</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo = {removeTodo} updateTodo = {updateTodo}/>
        </div>
    )
}

export default TodoList
