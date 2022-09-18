


function SingleItemContent({ item }) {
    return (<div>
        <p>{item.content}이런 일이 있었습니다. </p>
    </div>);
}


function ItemContent({ items }) {

    return <ul>{items.map((item) => {
        return <li key={item.id}><SingleItemContent item={item} /></li>
    })} </ul>;
}

export default ItemContent;