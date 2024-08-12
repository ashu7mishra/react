import {useState} from "react"
const TodoList = () => {
    const [list, setList] = useState([
        {title:'Item 1', id: 1},
        {title:'Item 2', id: 2}, 
        {title:'Item 3', id: 3}, 
        {title:'Item 4', id: 4}, 
        {title:'Item 5', id: 5}, 
    ]);
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
        const newList = [...list,{ 
            title: newItem,
            id: Math.random()
        }];
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
                        return (<li key={item.id}>{item.title}</li>);
                    })
                }
                {/* {renderList()} */}
            </ul>
        </div>
    )

}

export default TodoList;