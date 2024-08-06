const PocketMoney = (props) => {
    const handleCry = () => {
        console.log("chup ho ja mere baap");
        props.changePocketMoney();
    }
    return (
        <div>
            Money: Rs.{props.money}
            <div><button onClick={handleCry}>Cry</button></div>
        </div>
    )
}

export default PocketMoney;