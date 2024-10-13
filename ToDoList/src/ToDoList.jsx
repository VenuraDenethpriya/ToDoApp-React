import React, { useState} from 'react'
//import { FaHandPointUp } from "react-icons/fa";

function ToDoList(){
    const [tasks,setTasks] = useState(["eat","read"]);
    const [newTask,setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTasks(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }
        

    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index - 1]] = [updatedTasks[index -1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <>
        <div className='to-do-list'>
            <h1>To-Do-List</h1>

            <div>
                <input 
                    type='text' 
                    placeholder='Enter a task...' 
                    value={newTask} 
                    onChange={handleInputChange}/>

                <button 
                    className='add-button' 
                    onClick={addTasks}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task,index)=>
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button 
                            className='delete-button' 
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button>

                        <button 
                            className='move-button' 
                            onClick={() => moveTaskUp(index)}>
                            Up
                        </button>
                    </li>
                )}
            </ol>
        </div>

        
        </>
    );
}
export default ToDoList