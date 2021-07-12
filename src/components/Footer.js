import React, {useContext, useState} from 'react'
import {DataContext} from "./DataProvider"
function Footer() {
    const [checkAll, setCheckAll] = useState(true)
    const [todos, setTodos] = useContext(DataContext)

    

    const handleCheckAll = ()=>{
        setCheckAll(!checkAll)
        const newTodos =[...todos]
        newTodos.map((todo)=>{
            todo.completed =checkAll
        })
        setTodos(newTodos)
    }

    const handleDelete = ()=>{
        const newTodos =todos.filter((todo)=>{
           return todo.completed === false
        })

        console.log(newTodos)

        setTodos(newTodos)
        setCheckAll(true)

        
       
    }
    return (
        <div>
            <div className="flex justify-between items-center mt-6">
                <label htmlFor="" 
                className="cursor-pointer
                ">
                    <input 
                    checked={!checkAll}
                    type="checkbox" 
                    name="all" id="all" 
                    className="mr-2 cursor-pointer" 
                    onChange={handleCheckAll}/>
                    All
                </label>
                <p>You have {todos.length} to do</p>
                <button onClick ={handleDelete} id="delete" className="bg-red-500 rounded px-4 pointer text-gray-50 pointer"> Delete</button>
            </div>
        </div>
    )
}

export default Footer
