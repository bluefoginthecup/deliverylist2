import DeliveryList from "./DeliveryList";
import items from "../mock2.json";

function App() {
    return <div><DeliveryList items={items} /> </div>
}

export default App;