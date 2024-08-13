// Username text field
// Password field
// Phone number field
// Batch selection field
import { useState } from "react";

const RegistrationForm = () =>{
    const [useName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [batch, setBatch] = useState('');


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log({
            useName,
            password,
            phoneNumber,
            batch
        })
    }
    const usernameChange = (e) => {
        console.log(e.target.value);
        setUserName(e.target.value);
    }
    const passChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }
    const phoneChange = (e) => {
        console.log(e.target.value);
        setPhoneNumber(e.target.value);
    }
    const batchChange = (e) => {
        console.log(e.target.value);
        setBatch(e.target.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username </label>
                <input type="text" placeholder="Enter Username" onChange={usernameChange}/>
            </div>
            <div>
                <label>Password </label>
                <input type="password" placeholder="Enter Password" onChange={passChange}/>
            </div>
            <div>
                <label>Phone </label>
                <input type="number" placeholder="Enter Contact Number" onChange={phoneChange}/>
            </div>
            <div>
                <label>Batch </label>
                <select onChange={batchChange}>
                    <option>Frontend</option>
                    <option>Backend</option>
                    <option>Fullstack</option>
                    <option>DSA</option>
                </select>
            </div>
            <div>
                <button type="submit">Register</button>
            </div>
        </form>
    )
}

export default RegistrationForm;