import ShoppingListItem from '../ShoppingListItem/ShoppingListItem';
import ShoppingListItemButtons from '../ShoppingListItemButtons/ShoppingListItemButtons';


function ShoppingList(props) {


    console.log('these are the props: ', props)
    {/*return (
    props.list.map(item => (
        <>
        <ShoppingListItem item={item} /> */}
        {/* <ShoppingListItemButtons />
        
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
            
            <hr /> 
        </>
        
        // purchaseStatus(purchased); */}
  
}

export default ShoppingList;