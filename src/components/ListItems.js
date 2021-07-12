import React, {useState} from 'react'

function ListItems({todo, id, switchId, handleEditValue}) {
    const [onEdit, setOnEdit] = useState(false)
    const [editValue, setEditValue] = useState(todo.name)
    const [checked, setChecked] = useState(todo.completed)

    const todoCompleted = (id)=>{
        setChecked(!checked)
        switchId(id, checked)
    
    }

    
    const handleEdit = (id)=>{
      
        setOnEdit(true)

    }
  
    const handleSave =(id)=>{
        if(editValue){
            handleEditValue(editValue, id)
        }else{
            setEditValue(todo.name)
        }

        setOnEdit(false)
       
    }

    if(onEdit){

        return (
      
            <li className="flex items-center justify-between space-x-2 p-2 m-2 capitalize border border-gray-50">
                <div className="flex items-center" >
                    <input
                        type="text"
                        id={editValue}
                        value={editValue}
                        name={editValue}
                        onChange={(e)=>setEditValue(e.target.value)}
                    />
                </div>
                <button  className="bg-green-500 rounded px-4 pointer text-gray-50" 
                onClick={()=>{handleSave(id)}}
                >Save</button>
            </li>
    )

    }else
    {
        return (
            <li className="flex items-center justify-between space-x-2 p-2 m-2 capitalize border border-gray-50">
                <label htmlFor={id} className="flex items-center " >
                    <input
                        checked={todo.completed}
                        type="checkbox"
                        id={id}
                        className="cursor-pointer"
                        onChange={() => todoCompleted(id)}
                    />
                    <p className={`${todo.completed && "bg-green-200 line-through"} ml-2 px-2  rounded`}>
                        {todo.name}
                    </p>
                </label>
                <button onClick={() => handleEdit(id)} className={`${todo.completed ? 'bg-red-500 disabled:opacity-50' : 'bg-green-500'} " rounded px-4 pointer text-gray-50"`}>Edit</button>
            </li>
    )
    }
   
}

export default ListItems
