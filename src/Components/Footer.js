const Footer = ({todos, onClearCompleted}) => {
    return(
        <div className="footer">
            {todos.filter((t) => t.isCompleted).length}/{todos.length} completed
            <button onClick={onClearCompleted} className='clearButton'>clear complited</button>
        </div>
    )
}

export default Footer;