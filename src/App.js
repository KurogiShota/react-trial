
import './App.css';
import { useState, useRef } from 'react';
import TodoList from './TodoList'
import { v4 as uuidv4 } from "uuid";


function App() {

  const [todos, setTodos] = useState([]);

  const todouseref = useRef();

  const handleAddTodo = () => {
    //タスクを追加する  
    const name = todouseref.current.value;

    if (name==="") return;

    //console.log(todouseref)

    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false}];
    });
    
    todouseref.current.value = null;
  };


const toggleTodo = (id) => {
  const newTodos = [...todos];
  const todo = newTodos.find((todo) => todo.id === id);
  todo.completed = !todo.completed;
  setTodos(newTodos);
};

const handleClear = () => {
  const newTodos = todos.filter((todo) => !todo.completed);
  setTodos(newTodos);
};

  return (
  <div>
    <TodoList todos={todos} toggleTodo={toggleTodo}/>
    <input type="text" ref={todouseref}/>
    <button onClick={ handleAddTodo }>タスクを追加</button>
    <button onClick={ handleClear }>完了したタスクの削除</button>
    <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
  </div>
  );
}

export default App;
