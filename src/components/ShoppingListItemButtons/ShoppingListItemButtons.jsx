

function ShoppingListItemButtons(props) {
    let purchased = props.purchased;
    if (purchased === 'NO') {
        return (
            <>
                <button className="remove" onClick={(event) => removeItem(item.id)}>Remove Item</button>
                <button id={item.id} className="purchased" onClick={(event) => itemPurchased(item.id)}>Purchased</button>
            </>
        )
    }
}

export default ShoppingListItemButtons;