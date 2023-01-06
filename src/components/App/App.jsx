import React from 'react';
import Header from '../Header/Header.jsx'
import './App.css';
import Axios from 'axios';
import {useState, useEffect} from 'react';


function App() {
    const [shoppingList, setShoppingList] = useState([]);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unit, setUnit] = useState('');
    
    useEffect(() => {
        fetchList();
      }, []);


    //GET Request
    const fetchList = () => {
        Axios({
            method: 'GET',
            url: '/groceryList',
        })
        .then((response) => {
            console.log('response from GET groceries', response.data);
            setShoppingList(response.data);
        })
        .catch((error) => {
            console.log('error getting shopping list', error);
        });
    };
    
    const addItem = (event) => {
        event.preventDefault();
        console.log(`save clicked with name: ${name}, quantity: ${quantity}, and unit: ${unit}`);

    //POST Request
        Axios({
            method: 'POST',
            url: '/groceryList',
            data: {
                name: name,
                quantity: quantity,
                unit: unit,
            }
        })
        .then((response) => {
            console.log('POST response from db: ', response);
            setName('');
            setQuantity('');
            setUnit('');
            fetchList();
        })
        .catch((error) => {
            console.log('error making POST request: ', error);
        });
    }

    //delete request
    const removeItem = (id) => {
        console.log('delete item clicked: ', id);
        Axios({
            method: 'DELETE',
            url: `/groceryList/${id}`,
        })
        .then((response) => {
            console.log('DELETE response from db: ', response);
            fetchList();
        })
        .catch((error) => {
          console.log('error making Delete request: ', error);
        });
    }

    //PUT request
    const itemPurchased = (id) => {
        console.log('Purchased button was clicked');
        
        Axios({
            method: 'PUT',
            url: `/groceryList/${id}`,
            data: {
                name: name,
                quantity: quantity,
                unit: unit,
                purchased: 'YES',
            }
        })
        .then((response) => {
            console.log('PUT response from db: ', response);
            fetchList();
        })
        .catch((error) => {
            console.log('error making PUT request: ', error);
        });
    }
    

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
            
            <form onSubmit={addItem}>
                <input 
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="item name"
                />
                <br />
                <input 
                    id="quantity"
                    value={quantity}
                    onChange={(event) => setQuantity(event.target.value)}
                    placeholder="quantity"
                />      
                <br />   
                < input 
                    id="unit"
                    value={unit}
                    onChange={(event) => setUnit(event.target.value)}
                    placeholder="unit"
                />
                <br />
                <button type="submit">Save</button>
            </form>
            

            <ul>
                <div>
                    
                    {shoppingList.map(item => (
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
                    <hr />
                </>
                ))}
            </div>
            </ul>
        </div>
        
    );
}

export default App;
