import React, { useState } from "react";
import "./App.css";
import Greeter from "./components/Greeter";
import ShoppingList from "./components/ShoppingList";
import ShoppingListForm from "./components/ShoppingListForm";
import Item from './models/item'
function App() {
  const [items, setItems] = useState<Item[]>([]);
  // const items = [
  //   { id: 1, product: "lemon", quantity: 3 },
  //   {
  //     id: 2,
  //     product: "chicken",
  //     quantity: 2,
  //   },
  // ];

  const addItem = (product:string) => {
    setItems(prev=>[...prev,{product:product,quantity:1,id:Math.floor(Math.random() * 100001)}])

  }
  return (
    <div className="App">
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem}/>
    </div>
  );
}

export default App;
