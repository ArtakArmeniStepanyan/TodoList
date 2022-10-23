import { useState } from 'react';
import TodoItem from './TodoItem' ;
import SortedTodoItem from './SortedTodoItem' ;


const TodoList = ({todos, onChange, onDelete}) => {

    const[showDateMode, setShowDateMode] = useState(true)
    let dates = [];
    let exist;

    todos.map((t) => {
        dates.map((d) => {
            if(d == t.date)
                return exist = true;
            else
                return exist = false;

        })
        if(!exist){
            dates.push(t.date)
        }
    })

    dates.sort();

    return(
        <div>
            <button className='showAllButton' onClick={() => {setShowDateMode(!showDateMode)}}>{showDateMode?'show by date' : 'show all'}</button>
            <div>
                {
                    showDateMode?
                    todos.map((todo) => {
                        return(
                            <TodoItem 
                                key={todo.id} 
                                todo={todo} 
                                onChange={onChange}
                                onDelete={onDelete}
                            />
                        )
                    }):
                    dates.map((d)=> {
                        return(
                            <SortedTodoItem 
                                key={d}
                                date={d}
                                todos={todos}
                                onChange={onChange}
                                onDelete={onDelete}
                            />           
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TodoList;