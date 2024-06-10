import React, { useState } from 'react';
import List from "./List";
import Add from "./Add";
import "./styles.css";

function Todo() {
    const [list, setList] = useState([
        {
            addItem: "Write code"
        },
        {
            addItem: "Drink water"
        },
        {
            addItem: "Read Book"
        }
    ]);

    const selectAllItems = (value) => {
        const updatedList = list.map(item => ({ ...item, checked: value }));
        setList(updatedList);
    };

    return (
        <div id='container'>
            <h1>ToDo</h1>
            <Add list={list} setList={setList}/>
            <List list={list} setList={setList} /> 
        </div>
    )
}

export default Todo;
