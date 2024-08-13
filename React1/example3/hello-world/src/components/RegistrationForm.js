// Username text field
// Password field
// Phone number field
// Batch selection field

const RegistrationForm = () =>{
    const handleSubmit = () =>{

    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username </label>
                <input type="text" placeholder="Enter Username"/>
            </div>
            <div>
                <label>Password </label>
                <input type="password" placeholder="Enter Password"/>
            </div>
            <div>
                <label>Phone </label>
                <input type="number" placeholder="Enter Contact Number"/>
            </div>
            <div>
                <label>Batch </label>
                <select>
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