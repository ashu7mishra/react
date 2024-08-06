import { useState } from "react"

const RandomName = () =>{

        const [randomId, setRandomId] = useState('123');
        const [randomName, setRandomName] = useState('abc');

        const changeIdentity = () => {
            const newRandomId = Math.random();
            setRandomId(newRandomId);

            const newRandomName = Math.random();
            setRandomName(newRandomName);
        }

    return (
        <div onClick={changeIdentity}>
            <span>Id: {randomId}</span>
            <span>Name: xyz{randomName}</span>
        </div>
    )
}

export default RandomName;