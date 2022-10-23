import React from "react";
import { useForm } from "react-hook-form";

const TodoFormWithValidation = ({addNewTodo}) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm({mode: "onBlur"});
    const onSubmit = (date) => {
        addNewTodo(date);
        reset();
    };

    return (
        <div className="form">    
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    {...register ("text", {
                        required: true
                    })}
                    className={`newTodoInput ${errors.text? "error": ""}`} 
                    placeholder='Write your todo here'
                     />
                <input 
                    {...register ("date", {
                        required: true
                    })}
                    type='date' 
                    className={`dateInput ${errors.date? "error": ""}`}
                     />
                <button type="submit" className="addButton">add</button>
            </form>
        </div>
    )
}

export default TodoFormWithValidation;