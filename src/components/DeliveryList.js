import './DeliveryList.css'


function DeliveryListItem({ item }) {
    return (
        <div className="DeliveryListItem">
            <img className="DeliveryListItem-thumbImg" src={item.thumbImgUrl} alt={item.name}></img>
            <div>
                <h1>{item.state} {item.client[0]}* {item.categoryOfBusiness}에 납품</h1>
                <p>{item.name} {item.color} {item.composition}을 주문해주셨습니다.</p>
                <p>납품일자: {item.deliveryDateForHuman}</p>
            </div>
        </div>
    );
}



function DeliveryList({ items }) {

    return <ul>{items.map((item) => {
        return <li key={item.id}><DeliveryListItem item={item} /></li>
    })} </ul>;
}

export default DeliveryList;