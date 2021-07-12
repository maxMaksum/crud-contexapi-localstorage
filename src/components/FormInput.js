import React, {useState, useContext, useRef, useEffect} from 'react'
import {DataContext} from './DataProvider'

function FormInput() {
    const [todos, setTodos] = useContext(DataContext)
    const [todoName, setTodoName] = useState("")
    const todoInput = useRef()

   const addTodo = (e)=>{
        e.preventDefault()
        console.log(todoName)
        setTodos([...todos, {name:todoName, completed:false}])
        setTodoName("")
        console.log(todos)
        todoInput.current.focus()
    }

    useEffect(()=>{
        todoInput.current.focus()
    },[])

    return (
        <div>
            <form autoComplete="off" className="w-full h-14 flex bg-gray-50" onSubmit={addTodo} >
                <input
                    type="text"
                    name="todos"
                    id="todos"
                    required
                    placeholder="What Need to be done"
                    className=" flex-grow p-2"
                    value={todoName}
                    onChange={(e)=>setTodoName(e.target.value)}
                    ref={todoInput}


                />

                <button type="submit" className="border border-gray-50 pointer w-1/4">Create</button>

            </form>
        </div>
    )
}

export default FormInput
