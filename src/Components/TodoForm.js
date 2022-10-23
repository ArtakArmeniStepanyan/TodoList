import { useState } from "react";

const TodoForm = ({addNewTodo}) => {
    const[newTodo, setNewTodo] = useState({
        text: '',
        date: ''
    });
    return (
        <div className="form">    
            <form onSubmit={(e) => {
                e.preventDefault();
                addNewTodo(newTodo);
                setNewTodo({text: '', date: ''})
            }}>
                <input type='text' value={newTodo.text} className="newTodoInput"
                placeholder='Write your todo here' onChange={(e) =>{
                setNewTodo({...newTodo, text: e.target.value})
                }} />
                <input type='date' value={newTodo.date} className="dateInput" onChange={(e) => {
                setNewTodo({...newTodo, date: e.target.value})
                }} />
                <button className="addButton">add</button>
            </form>
        </div>
    )
}

export default TodoForm;