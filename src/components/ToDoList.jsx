import React, { useState } from 'react';

const ToDoList = () => {
    const [toDo, setToDo] = useState("");
    const [checklist, setChecklist] = useState([])

    const submitHandler = (event) => {
        event.preventDefault();
        if (toDo.length === 0){
            return;
        }
        const toDoItem = {
            text: toDo,
            complete: false
        }
        setChecklist([...checklist, toDoItem]);
        setToDo("");
    };

    const handleDelete = (delIdx) => {
        const filteredChecklist = checklist.filter((toDo, idx) => {
            return idx !== delIdx;
        });
        setChecklist(filteredChecklist);
    };

    const handleComplete = (i) => {
        const updatedChecklist = checklist.map((toDo, idx) => {
            if ( i === idx ) {
                toDo.complete = !toDo.complete;
            }
            return toDo;
        })
    setChecklist(updatedChecklist);
    }

    return(
        <div className="box">
            <h1>To Do List:</h1>
            <form onSubmit={(event) => {submitHandler(event)}}>
                <div>
                    <input onChange={(event) => { setToDo(event.target.value);}} type="text" name="todo" id="todo" value={toDo} placeholder="Insert To Do's Here"/>
                </div>
                <div>
                    <button>Add To List</button>
                </div>
            </form>
            { checklist.map((toDo, idx )=> {
                return(
                    <div className="listItems" key={idx}>
                        <input onChange={(event) => {handleComplete(idx)}} checked={toDo.complete} type="checkbox"/>
                        <span>{toDo.text}</span>
                        <button  onClick={(event) => {handleDelete(idx)}}>Delete</button>
                    </div>
                );
            })
            }
        </div>
    )
}

export default ToDoList;