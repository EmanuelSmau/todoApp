
import React, {useState} from 'react';

const Todo = (props) => {
  return (
    <div style={{textDecoration: props.todo.completato ? 'line-through': ''}}className='todo bg-indigo-700 flex flex-row items-center justify-center justify-between py-3 px-1 text-base mb-5 pr-3 pl-3 rounded-md text-indigo-100'>
      {props.todo.name}
      <div>
        <button onClick={() => props.completaTodo(props.index) } className=' bg-indigo-100 text-indigo-900 rounded-md pr-1 pl-1'>Completa</button>
      </div>
    </div>
  )
}

const Form = (props) => {
  const [value, setValue] = useState();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === ''){
      alert ('write something')
      return
    }
    props.submit(value)
   setValue('')
  }

  const onChangeText = (e) => {
    setValue(e.target.value)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input className='input w-full box-border rounded-md p-5 h-8' type="text" value={value} placeholder="add todo" onChange={onChangeText}/>
    </form>
  )
}

const App = () => {
  const [todos, setTodos] = useState([
      {name: 'Studiu React', completato: false},
      {name: 'Curatenie', completato: false},
      {name: 'Cumpara kefir', completato: false},
  ]);

  const addTodo = (todo) => {
    const newTodos = [...todos, {name: todo}]
    // nu functioneaza 
    //todos.push({name: todo})
    setTodos(newTodos)
  }

  const completaTodo = (index) => {
    const newTodos = [...todos];
    const currentCompletato = newTodos[index].completato 
    newTodos[index].completato = !currentCompletato;
    setTodos(newTodos)
  }

  return(
    <div className='app bg-indigo-900 p-[30 px] h-screen flex flex-col justify-center items-center'>
      <div className='Title font-mono justify-center content-start mb-14 text-indigo-100'>
        <h1>TO DO LIST</h1>
      </div>
      <div className='todo-list font-mono bg-indigo-100 rounded-md p-[8px] max-w-lg'>
        {todos.map((item, index) =>(
          <Todo key={index} todo={item} index={index} completaTodo={completaTodo}/>
        ))}
         <Form submit={addTodo}/>
      </div>
    </div>
  )
}


 
export default App;
