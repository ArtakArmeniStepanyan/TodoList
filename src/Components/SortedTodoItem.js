import { useState } from "react";

const SortedTodoItem = ({todos, date, onChange, onDelete}) => {

const[viewMode, setViewMode] = useState(false);

const datedTodos = todos.filter((t) => t.date === date);

    return(
        <div className="sortedTodoItem">
            <div className="sortedItemDateAndButton">
                <div className="dates">
                    {date} ({todos.filter((t) => t.date === date).length})
                </div>
                <button className="showTodos"
                    onClick={() => {setViewMode(!viewMode)}}>{viewMode?'hide todos': 'show todos'}</button>
            </div>
            <div className="sortedItems">
            {
                viewMode?
                    datedTodos.map((t) => {
                        return(
                            <div key={t.id} className='todoItemByDate'>
                                <label>
                                    <input className="checkbox" type='checkbox' checked={t.isCompleted} onChange={(e) => {
                                    onChange({...t, isCompleted: e.target.checked})
                                    }} />
                                    {t.text}
                                    <button className="closeButton" onClick={(e) => {onDelete(t)}}>X</button>
                                </label>
                            </div>
                        )
                    })
                :''
            }
            </div>
        </div>
    )
}

export default SortedTodoItem;