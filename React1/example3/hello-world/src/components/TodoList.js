const TodoList = () => {
    const list = ['Item 1', 'Item 2','Item 3','Item 4','Item 5']
    return (
        <div className="TodoWrapper">
            <h2>Todo List</h2>
            <ul>
                {
                    list.forEach(item => {
                        return (<li>{item}</li>);
                    })
                }
            </ul>
        </div>
    )

}

export default TodoList;