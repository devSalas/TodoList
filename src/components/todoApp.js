import { useState } from "react"
import Todo from "./todo"
import './todoApp.css'
import image from "../thinkprerson.png"
export default function TodoApp(){

  const [title, settitle] = useState('')
  const [todos,setTodos] = useState([])

  function handleSubmit(e){
    e.preventDefault()

    const newTodo = {
      id:crypto.randomUUID(),
      title:title,
      completed:false
    }


    //setTodos(...todos,newTodo);
    const temp= [...todos];
    temp.unshift(newTodo);
    setTodos(temp)

    settitle("")

  }

  function handleChange(event){
      const value=event.target.value
      settitle(value)
  }
  function handleUpDate(id,value){
    const temp=[...todos];
    const item= temp.find(item=>item.id===id);
    item.title=value;
    setTodos(temp)

  }

  function handleDelete(id){
    const Temp=todos.filter(item=>item.id!==id)
    setTodos(Temp)
  }
  return(

    <div className="todoContainer">
      <h1>Todo List</h1>
      <h3>Comienza Agregando algo</h3>
      <form action="" className="todoCreateForm" onSubmit={handleSubmit}>
        <input onChange={handleChange} className="todoInput" type="text" value={title} />
        <input  type="submit" value="Agrega nota" className="buttonCreate"/>

      </form>
      <div className="todosContainer">
        
          {todos.map(item=>(
            <Todo key={item.id} item={item} onUpdate={handleUpDate} onDelete={handleDelete}/>
          ))}
      </div> 
      <figure>
        <img src={image} alt="" />
      </figure>
    </div>

  )
}