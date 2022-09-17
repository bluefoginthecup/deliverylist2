import DeliveryList from "./DeliveryList";
//import items from "../mock2.json";
import { useState } from "react";
import { getDeliveryList } from "./api";

function App() {
    const [order, setOrder] = useState('deliveryDate');
    const [items, setItems] = useState([]);
    const sortedItems = items.sort((a, b) => b[order] - a[order]);

    const handleNewstClick = () => { setOrder('deliveryDate') };

    const handleIdClick = () => { setOrder('id') };

    const handleLoad = async () => {
        const { deliverylist } = await getDeliveryList();
        setItems(deliverylist);
    }

    return (
        <div>
            <button onClick={handleNewstClick}>최신순</button>
            <button onClick={handleIdClick}>아이디 큰 순</button>
            <button onClick={handleLoad}>불러오기</button>
            <div><DeliveryList items={sortedItems} /> </div>
        </div>
    )
}

export default App;