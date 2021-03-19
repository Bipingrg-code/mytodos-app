import React from 'react'
import Todo from './Todo'

function TodosList({todos, setTodos, filterTodos}) {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filterTodos.map((todo) => (
                    
                    <Todo

                        key={todo.id}

                        text={todo.text}
                        
                        //Passing state app.js from todo.js
                        todo={todo}

                        todos={todos}
                        setTodos={setTodos}
                    />
                ))
                };
            </ul>
        </div>
    )
}

export default TodosList
