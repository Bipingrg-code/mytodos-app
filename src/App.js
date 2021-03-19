
import React, {useState, useEffect} from 'react'
import './App.css';
import Form from './components/Form'
import TodosList from './components/TodosList'

function App() {
  //STATE
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const [status, setStatus] = useState("all")
  const [filterTodos, setFilterTodos] = useState([])

  //USEEFFCTS FOR GETTODDOS RUN ONCE APPS WHEN START
  useEffect(() => {
    getLocalStorage();
    
  }, [])
  
  //USEEFFCTS
  useEffect(() => {
    
    filterHandler();
    saveToLocalStorage();

  }, [todos,status]);

  


  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilterTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilterTodos(todos)
        break;
    }
  }

//SAVE TO LOCAL STORAGE

const saveToLocalStorage = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
    // localStorage.setItem('todos', JSON.stringify(todos));
}


const getLocalStorage = () => {
  if(localStorage.getItem('todos') ===  null){
     localStorage.setItem('todos', JSON.stringify([]));
  }else{
    let getLocalTodos = JSON.parse(localStorage.getItem('todos'));
    // setTodos(getLocalStorage);
  }
}

  

  return (
    <div className="App">
        <header>
          <h1>MY TODOS LIST </h1>
        </header>

        <Form 
          inputText={inputText} 
          setInputText={setInputText} 
          
          todos={todos} 
          setTodos={setTodos}

          setStatus={setStatus}
        />

        <TodosList 
          todos={todos} 
          setTodos={setTodos} 

          filterTodos = {filterTodos}
        />
    </div>
  );
}

export default App;
