import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../actions';

const TodoList = (props) => {
  const { todos, addTodo, toggleTodo, removeTodo } = props;
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = () => {
    if (newTodoText.trim() !== '') {
      addTodo(newTodoText.trim());
      setNewTodoText('');
    }
  };

  const handleRemoveTodo = (id) => {
    removeTodo(id);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Add Todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAddTodo();
            }
          }}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, { addTodo, toggleTodo, removeTodo })(TodoList);
