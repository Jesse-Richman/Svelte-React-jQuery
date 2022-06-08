import {useState} from 'react';
import "./ListControl.css";

export default function ListControl({startingItems}) {
    let [items, setItems] = useState(startingItems);
    const [newItem, setNewItem] = useState("");
    const [i, setI] = useState(0);
    const [selected, setSelected] = useState(items[i]);

    const addItem = () => {
        if (newItem === "")
            return;

        setItems(items.concat(newItem));
        setI(items.length - 1);
    };

    const removeItem = () => {
        const index = items.indexOf(selected);
        setItems([...items.slice(0, index), ...items.slice(index+1)]);

        setI(Math.min(i, items.length - 2));
    }

    const listItems = items.map((item, index) => <option value={item} key={index}>{item}</option>);
    return (
        <div className='container'>
            <div className='controls'>
                <input type="text" onChange={(e) => setNewItem(e.target.value)}></input>
                <button onClick={addItem}>Add</button>
                <button onClick={removeItem}>Remove</button>
            </div>

            <div className='list'>
                <select onChange={(e) => setSelected(e.target.value)} size={5}>
                    {listItems}
                </select>
            </div>
        </div>
    );
}