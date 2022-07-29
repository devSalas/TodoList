import { useState } from "react"
export default function Todo({item,onUpdate,onDelete}){

  const [isEdit, setisEdit] = useState(false)

  


  function FomrEdit(){
    const [newValue,setNewValue]=useState(item.title);
   
    function handleChange(e){
      const value=e.target.value;
      setNewValue(value)
    }
    function handleSubmit(e){
        e.preventDefault();

    }
    function handleclickUpdateTodo(){
      onUpdate(item.id,newValue)
      setisEdit(false)
    }

    return <form className="todoUpdateForm" onSubmit={handleSubmit}>

    <input type="text" className="todoInput" onChange={handleChange} value={newValue} />
    <button className="button" onClick={handleclickUpdateTodo}>Actualizar</button>
    </form>
  }

  function TodoElement(){
    return <div className="todoInfo">
       <span className="todoTitle">{item.title}</span>
      <button className="button" onClick={()=>setisEdit(true)}>Editar</button>
      <button className="buttonDelete" onClick={()=>onDelete(item.id)}>Eliminar</button>
    </div>
  }

  return( 
     
    <div>
      {isEdit ?<FomrEdit/>:<TodoElement/>}
    </div>
  )
    
}