import React from 'react'
import {useState, useContext} from 'react'
import ListItems from './ListItems'
import {DataContext} from "./DataProvider"

function List() {
   
    const [todos, setTodos] = useContext(DataContext)

    const switchId = (id, completed) => {
        const newTodos = [...todos]
        newTodos.map((todo, index) => {
            if (id===index) {
                todo.completed = completed
            }

        })

        setTodos(newTodos)
        console.log(todos)
    
    }


   const handleEditValue = (editValue, id)=>{
     
    const newTodos = [...todos]
    
    newTodos.map((todo, index) => {
        if (index === id) {
            todo.name = editValue
        }

    })

    setTodos(newTodos) 
    console.log(todos)

   }


 

    return (
        <div>

           

            <ul>
            {todos.map((todo, index)=>(
                 <ListItems 
                 todo={todo} 
                 key={index} 
                 id={index} 
                 switchId={switchId}
                 handleEditValue={handleEditValue}
                 />
                ))}
               
                
            </ul>
        </div>
    )
}

export default List
