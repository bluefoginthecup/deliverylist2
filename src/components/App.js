import DeliveryList from "./DeliveryList";
import items from "../mock2.json";
import { useState } from "react";

function App() {
    const [order, setOrder] = useState('deliveryDate')
    const sortedItems = items.sort((a, b) => b[order] - a[order]);

    const handleNewstClick = () => { setOrder('deliveryDate') };

    const handleIdClick = () => { setOrder('id') }

    return (
        <div>
            <button onClick={handleNewstClick}>최신순</button>
            <button onClick={handleIdClick}>아이디 큰 순</button>

            <div><DeliveryList items={sortedItems} /> </div>
        </div>
    )
}

export default App;