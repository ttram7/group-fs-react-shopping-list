// import ShoppingListItemButtons from '../ShoppingListItemButtons/ShoppingListItemButtons';

function ShoppingListItem (props) {
    let item = props.item;

    return (
        <>
            <h3> 
                {item.name} 
            </h3>
            
            <h3>
                how many: {item.quantity}
            </h3>
            
            <h3> 
                unit: {item.unit}                   
            </h3> 
            <button className="remove" onClick={(event) => removeItem(item.id)}>Remove Item</button>
            <button id={item.id} className="purchased" onClick={(event) => itemPurchased(item.id)}>Purchased</button>
            {/* <ShoppingListItemButtons item={item} /> */}

            
            <hr />
        </>
    )
}

export default ShoppingListItem;