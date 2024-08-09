const TodoList = () => {
    const list = ['Item 1', 'Item 2','Item 3','Item 4','Item 5']

    // const renderList = () => {
    //     const data = [];
    //     list.map(item => {
    //         data.push(<li>{item}</li>)
    //     })

    //     return data
    // }

    return (
        <div className="TodoWrapper">
            <h2>Todo List</h2>
            <ul>
                {
                    list.map(item => {
                        return (<li>{item}</li>);
                    })
                }
                {/* {renderList()} */}
            </ul>
        </div>
    )

}

export default TodoList;