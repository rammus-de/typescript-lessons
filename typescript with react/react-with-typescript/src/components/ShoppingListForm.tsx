import React,{useRef} from "react";
interface ShoppingListFormProps {
    onAddItem : (param:string)=>void
}
function ShoppingListForm({onAddItem}:ShoppingListFormProps): JSX.Element {
    const inputRef = useRef<HTMLInputElement>(null)
    function handleSubmit(e:React.FormEvent){
        e.preventDefault()
       const newItem = inputRef.current!.value
        onAddItem(newItem)
    }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="" placeholder="product name" id="" ref={inputRef} />
      <button type="submit">add item</button>
    </form>
  );
}

export default ShoppingListForm;
