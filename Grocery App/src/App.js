import React, { useState } from 'react';
import './index.css';
import AddItemBox from './components/AddItemBox';
import ItemName from './components/ItemName';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import Quantity from './components/Quantity';

const App = () => {
  // HINT: each "item" in our list names a name,
  // a boolean to tell if its been completed, and a quantity
  const [items, setItems] = useState([
    { itemName: 'item 1', quantity: 1, isSelected: false }, //Item variables or our app to render
    { itemName: 'item 2', quantity: 3, isSelected: true },
    { itemName: 'item 3', quantity: 2, isSelected: false },
  ]);

  const [inputValue, setInputValue] = useState('');
  const [totalItemCount, setTotalItemCount] = useState(6);

  const handleAddButtonClick = () => {
    const newItem = {
      /**keys and objects */ itemName: inputValue,
      quantity: 1,
      isSelected: false,
    };

    const newItems = [...items, newItem];

    setItems(newItems);
    setInputValue('');
    calculateTotal();
  };

  const handleQuantityIncrease = (index) => {
    // This will increase the items in the cart
    const newItems = [...items]; //Array literal

    newItems[index].quantity++; //this sintax will be executed when new items are added to the cart

    setItems(newItems);
    calculateTotal(); //Sum the value of HandleQuantityIncrease.
  };

  const handleQuantityDecrease = (index) => {
    //Sytax will decreade the number o items in our cart.
    const newItems = [...items];

    newItems[index].quantity--;

    setItems(newItems); //
    calculateTotal(); //Sum the value of HandleQuantityIncrease.
  };

  const toggleComplete = (index) => {
    //Syntax will cross-out the item once toggled to mark complete.
    const newItems = [...items];

    newItems[index].isSelected = !newItems[index].isSelected;

    setItems(newItems);
  };

  const calculateTotal = () => {
    const totalItemCount = items.reduce((total, item) => {
      return total + item.quantity;
    }, 0);

    setTotalItemCount(totalItemCount);
  };

  return (
    <div className='app-background'>
      <div className='main-container'>
        <AddItemBox
          handleAddButtonClick={handleAddButtonClick}
          faPlus={faPlus}
          setInputValue={setInputValue}
          inputValue={inputValue}
        />
        <div className='item-list'>
          {items.map((item, index) => (
            <div className='item-container'>
              <ItemName
                faCircle={faCircle}
                faCheckCircle={faCheckCircle}
                item={item}
                index={index}
                toggleComplete={toggleComplete}
              />

              <Quantity
                index={index}
                item={item}
                handleQuantityIncrease={handleQuantityIncrease}
                handleQuantityDecrease={handleQuantityDecrease}
                faChevronLeft={faChevronLeft}
                faChevronRight={faChevronRight}
              />
            </div>
          ))}
        </div>
        <div className='total'>Total: {totalItemCount}</div>
      </div>
    </div>
  );
};

export default App;
