const TodoItem = ({todo, onChange, onDelete}) => {
    return(
        <div className="todoItem">
            <label>
                <input type='checkbox' checked={todo.isCompleted} className='checkbox' 
                onChange={(e) => {onChange({...todo, isCompleted: e.target.checked})}} />
                {todo.text}
                {`   `}({todo.date})
                <button className="closeButton" onClick={(e) => {onDelete(todo)}}>X</button>
            </label>
        </div>
    )
}

export default TodoItem;