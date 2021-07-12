import React, {useState, useEffect, createContext} from 'react'

export const DataContext = createContext()



function DataProvider(props) {
    const [todos, settodos] = useState([])
    
    useEffect(()=>{
        const todoStore =JSON.parse(localStorage.getItem('todoStore'))
        if(todoStore) settodos(todoStore)
    },[])

    useEffect(()=>{
        localStorage.setItem('todoStore', JSON.stringify(todos))
    },[todos])

 
    return (
        <DataContext.Provider value={[todos, settodos]}>

            {props.children}
            
        </DataContext.Provider>
    )
}

export default DataProvider
