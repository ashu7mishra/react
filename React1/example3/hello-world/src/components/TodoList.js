import {useState} from "react"
const TodoList = () => {
    const [list, setList] = useState(['Item 1', 'Item 2','Item 3','Item 4','Item 5']);
    const[newItem, setNewItem] = useState('')
    // const renderList = () => {
    //     const data = [];
    //     list.map(item => {
    //         data.push(<li>{item}</li>)
    //     })

    //     return data
    // }

    const handleNewItemChange = (e) => {
        // console.log(e.target.value);
        setNewItem(e.target.value);
    }

    const handleButtonClick = () => {
        // I want to know the value inside input text box
        // Add the new item in list
        // console.log(newItem);
        // list.push(newItem);   //not working
        setNewItem('')
        const newList = [...list, newItem];
        setList(newList);
    }

    return (
        <div className="TodoWrapper">
            <h2>Todo List</h2>
            <div>
                <input type="text" placeholder='Add Item' value={newItem} onChange={handleNewItemChange}/>
                <button onClick={handleButtonClick}>Add</button>
            </div>
            
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