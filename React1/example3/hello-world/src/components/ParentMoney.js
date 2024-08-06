import { useState } from "react";
import PocketMoney from "./PocketMoney";

const ParentMoney = () => {
    const [money, setMoney] = useState(200);

    const increasePocketMoney = () => {
        setMoney(money+100);
    }

    return (
        <PocketMoney money={money} changePocketMoney={increasePocketMoney}/>
    )
}

export default ParentMoney;